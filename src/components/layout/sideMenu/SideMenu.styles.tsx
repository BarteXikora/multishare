import styled from 'styled-components'

const StyledSideMenu = styled.nav`
    position: relative;
    right: auto;
    left: 0;
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    width: 300px;
    height: 100%;
    box-sizing: border-box;
    padding: ${(props) => props.theme.margins.sectionBig};

    h2 {
        font-weight: bold;
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        margin-bottom: ${(props) => props.theme.margins.medium};
    }

    section {
        width: 100%;
    }

    button {
        width: 100%;
    }

    .logo, .used-space {
        margin-bottom: ${(props) => props.theme.margins.extraBig};
    }

    .nav-menu {
        height: 100%;

        button {
            margin-bottom: ${(props) => props.theme.margins.small};
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.tablet}) {
        position: absolute;
        left: auto;
        right: 100vw;
    }
`

export default StyledSideMenu