import styled from 'styled-components'

const StyledPathBox = styled.nav`
    display: flex;
    gap: ${(props) => props.theme.margins.small};
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    padding: ${(props) => props.theme.margins.sectionMedium};
    border-radius: ${(props) => props.theme.borderRadiuses.big};

    .collapsed-path-separator {
        display: flex;
        align-items: center;
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        font-weight: bold;
        padding-left: ${(props) => props.theme.margins.medium};
    }

    .path {
        display: flex;
        gap: ${(props) => props.theme.margins.small};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        padding: ${(props) => props.theme.margins.sectionSmall};
        gap: 0;

        .path, .collapsed-path-separator {
            display: none;
        }
    }
`

export default StyledPathBox