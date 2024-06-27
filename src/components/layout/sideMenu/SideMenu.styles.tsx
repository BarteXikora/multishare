import styled from 'styled-components'

const StyledSideMenu = styled.nav`
    .animated-content {
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: ${(props) => props.theme.colors.black};
        color: ${(props) => props.theme.colors.white};
        width: 300px;
        height: 100%;
        box-sizing: border-box;
        padding: ${(props) => props.theme.margins.sectionBig};
        z-index: 2000;

        section {
            width: 100%;
        }

        button {
            width: 100%;
        }

        .logo, .used-space {
            margin-bottom: ${(props) => props.theme.margins.big};
        }

        .nav-menu {
            height: 100%;

            button {
                margin-bottom: ${(props) => props.theme.margins.small};
            }
        }

        .close-button {
            display: none;
            position: absolute;
            width: auto;
            right: -60px;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.tablet}) {
        &.shown .close-button {
            display: flex;
        }
    }
`

export default StyledSideMenu