/** 
 * Main column
 * 
 * Designed to be render inside the Body colums component. Renders children and provides content section 
 * content events: unselecting all on click on the background and displaing context menu on right click. 
**/

import { useRef } from 'react'
import useContentEvents from '../../../../hooks/useContentEvents/useContentEvents'
import { ReactNode } from 'react'

const MainColumn = ({ children }: { children: ReactNode }) => {
    const sectionRef = useRef<HTMLElement>(null)

    const { unselectAll, locationContextMenu } = useContentEvents()

    // Handling events:
    const handleEvent = (eventType: 'CLICK' | 'CONTEXT_MENU', event: React.MouseEvent, ref: React.RefObject<HTMLElement>) => {
        if (event.target === ref.current) {
            if (eventType === 'CLICK') unselectAll()
            else locationContextMenu()
        }
    }

    // Rendering the component.
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