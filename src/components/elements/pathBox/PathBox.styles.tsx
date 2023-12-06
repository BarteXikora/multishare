import styled from 'styled-components'

const StyledPathBox = styled.nav`
    display: flex;
    gap: ${(props) => props.theme.margins.small};
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    padding: ${(props) => props.theme.margins.sectionMedium};
    border-radius: ${(props) => props.theme.borderRadiuses.big};
`

export default StyledPathBox