import StyledMainBody from './MainBody.styles'
import { ChildrenProps } from '../../../utilities/types'

const MainBody = ({ children }: ChildrenProps) => {
    return <StyledMainBody>{children}</StyledMainBody>
}

export default MainBody