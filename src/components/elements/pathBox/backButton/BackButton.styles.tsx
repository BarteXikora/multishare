import styled from 'styled-components'
import Button from '../../../ui/button/Button'

const StyledBackButton = styled(Button)`
    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        padding: ${(props) => props.theme.margins.small}
    }
`

export default StyledBackButton