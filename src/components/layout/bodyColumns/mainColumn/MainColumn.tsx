type ChildrenProps = {
    children?: string | JSX.Element | JSX.Element[] | undefined
}

const MainColumn = ({ children }: ChildrenProps) => {
    return <section className='main-column'>
        {children}
    </section>
}

export default MainColumn