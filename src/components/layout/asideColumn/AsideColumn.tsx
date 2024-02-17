type ChildrenProps = {
    children?: string | JSX.Element | JSX.Element[] | undefined
}

const AsideColumn = ({ children }: ChildrenProps) => {
    return <aside className='aside-column'>
        {children}
    </aside>
}

export default AsideColumn