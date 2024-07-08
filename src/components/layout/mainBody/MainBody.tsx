/** 
 * Main Body
 * 
 * Renders children and the MessagePill component. Provides css styles.
**/

import { ReactNode } from 'react'

import StyledMainBody from './MainBody.styles'
import MessagePill from '../messagPill/MessagePill'

const MainBody = ({ children }: { children: ReactNode }) => {

    // Rendering the component:
    return <StyledMainBody>
        {children}

        <MessagePill />
    </StyledMainBody>
}

export default MainBody