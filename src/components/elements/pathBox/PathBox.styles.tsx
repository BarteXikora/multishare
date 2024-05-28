import styled from 'styled-components'

const StyledPathBox = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${(props) => props.theme.margins.small};
    background-color: ${(props) => props.theme.colors.black};
    border-radius: ${(props) => props.theme.borderRadiuses.big};

    .main-section {
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.margins.small};
        color: ${(props) => props.theme.colors.white};
        padding: ${(props) => props.theme.margins.sectionMedium};
    }

    .warning-section {
        display: flex;
        align-self: stretch;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        gap: 0;
        display: grid;
        grid-template-columns: auto minmax(0, 100%);

        .main-section {
            padding: ${(props) => props.theme.margins.sectionSmall};
        }

        .warning-section {
            align-self: center;
        }
    }
`

export default StyledPathBox