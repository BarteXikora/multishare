import styled from 'styled-components'

const StyledTopBar = styled.nav`
    display: flex;
    position: fixed;
    gap: ${(props) => props.theme.margins.big};
    width: calc(100% - 300px);
    left: 300px;
    background-color: ${(props) => props.theme.colors.white};
    padding: ${(props) => props.theme.margins.sectionBig};
    box-sizing: border-box;
    z-index: 1000;

    .search {
        display: flex;
        width: 50%;
    }

    .hamburger-button {
        display: none;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.tablet}) {
        left: 0;
        width: 100%;

        .hamburger-button {
            display: flex;
        }

        .search {
            width: 100%;
            flex-shrink: 1000;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        padding: ${(props) => props.theme.margins.sectionSmall};
        gap: ${(props) => props.theme.margins.small};
    }
`

export default StyledTopBar