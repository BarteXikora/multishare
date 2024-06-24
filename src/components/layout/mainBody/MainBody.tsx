import StyledMainBody from './MainBody.styles'
import MessagePill from '../messagPill/MessagePill'

import { ChildrenProps } from '../../../utilities/types'

const MainBody = ({ children }: ChildrenProps) => {
    return <StyledMainBody>
        {children}

        <MessagePill />
    </StyledMainBody>
}

export default MainBody