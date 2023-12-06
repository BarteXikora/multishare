import StyledBodyColumns from './BodyColumns.styles'

type ChildrenProps = {
    children?: string | JSX.Element | JSX.Element[] | undefined
}

const BodyColumns = ({ children }: ChildrenProps) => {
    return <StyledBodyColumns>{children}</StyledBodyColumns>
}

export default BodyColumns