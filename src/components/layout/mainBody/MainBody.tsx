import StyledMainBody from './MainBody.styles'

type ChildrenProps = {
    children?: string | JSX.Element | JSX.Element[] | undefined
}

const MainBody = ({ children }: ChildrenProps) => {
    return <StyledMainBody>{children}</StyledMainBody>
}

export default MainBody