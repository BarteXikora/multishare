import StyledBodyColumns from './BodyColumns.styles'
import { ReactNode } from 'react'

const BodyColumns = ({ children }: { children: ReactNode }) => {
    return <StyledBodyColumns>{children}</StyledBodyColumns>
}

export default BodyColumns