import { useRef } from 'react'
import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'
import { ChildrenProps } from '../../../../utilities/types'

const MainColumn = ({ children }: ChildrenProps) => {
    const sectionRef = useRef<HTMLElement>(null)

    const { unselectAll } = useContentEvents()

    const handleClick = (event: React.MouseEvent, ref: React.RefObject<HTMLElement>) => {
        if (event.target === ref.current) unselectAll()
    }

    return <section className='main-column' ref={sectionRef} onClick={e => handleClick(e, sectionRef)}>
        {children}
    </section>
}

export default MainColumn