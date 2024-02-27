import styled from 'styled-components'

const StyledPathBox = styled.nav`
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.margins.small};
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    padding: ${(props) => props.theme.margins.sectionMedium};
    border-radius: ${(props) => props.theme.borderRadiuses.big};

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        padding: ${(props) => props.theme.margins.sectionSmall};
        gap: 0;

        display: grid;
        grid-template-columns: auto minmax(0, 100%);
    }
`

export default StyledPathBox