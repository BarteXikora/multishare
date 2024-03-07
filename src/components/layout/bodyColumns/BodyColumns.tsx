import StyledBodyColumns from './BodyColumns.styles'
import { ChildrenProps } from '../../../utilities/types'

const BodyColumns = ({ children }: ChildrenProps) => {
    return <StyledBodyColumns>{children}</StyledBodyColumns>
}

export default BodyColumns