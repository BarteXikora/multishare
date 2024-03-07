import { ChildrenProps } from '../../../../utilities/types'

const AsideColumn = ({ children }: ChildrenProps) => {
    return <aside className='aside-column'>
        {children}
    </aside>
}

export default AsideColumn