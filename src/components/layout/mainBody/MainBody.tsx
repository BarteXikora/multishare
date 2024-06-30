import { ReactNode } from 'react'

import StyledMainBody from './MainBody.styles'
import MessagePill from '../messagPill/MessagePill'

const MainBody = ({ children }: { children: ReactNode }) => {
    return <StyledMainBody>
        {children}

        <MessagePill />
    </StyledMainBody>
}

export default MainBody