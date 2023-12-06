import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.margins.medium};
    width: 100%;
`

export default StyledHeader