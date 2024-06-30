import { useRef } from 'react'
import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'
import { ReactNode } from 'react'

const MainColumn = ({ children }: { children: ReactNode }) => {
    const sectionRef = useRef<HTMLElement>(null)

    const { unselectAll, locationContextMenu } = useContentEvents()

    const handleEvent = (eventType: 'CLICK' | 'CONTEXT_MENU', event: React.MouseEvent, ref: React.RefObject<HTMLElement>) => {
        if (event.target === ref.current) {
            if (eventType === 'CLICK') unselectAll()
            else locationContextMenu()
        }
    }

    return <section
        className='main-column'
        ref={sectionRef}
        onClick={e => handleEvent('CLICK', e, sectionRef)}
        onContextMenu={e => handleEvent('CONTEXT_MENU', e, sectionRef)}
    >
        {children}
    </section>
}

export default MainColumn