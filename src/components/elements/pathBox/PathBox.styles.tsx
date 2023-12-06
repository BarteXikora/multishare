import styled from 'styled-components'

const StyledPathBox = styled.nav`
    display: flex;
    gap: ${(props) => props.theme.margins.small};
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    padding: ${(props) => props.theme.margins.sectionMedium};
    border-radius: ${(props) => props.theme.borderRadiuses.big};

    .path-element {
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        font-weight: bold;
    }
`

export default StyledPathBox