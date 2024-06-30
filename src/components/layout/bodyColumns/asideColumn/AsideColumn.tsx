import { ReactNode } from 'react'

const AsideColumn = ({ children }: { children: ReactNode }) => {
    return <aside className='aside-column'>
        {children}
    </aside>
}

export default AsideColumn