import styled from 'styled-components'

const StyledSideMenu = styled.nav`
    .animated-content {
        position: fixed;
        z-index: 2000;

        .container { 
            display: flex;
            flex-direction: column;
            background-color: ${(props) => props.theme.colors.black};
            color: ${(props) => props.theme.colors.white};
            width: 300px;
            height: 100svh;
            box-sizing: border-box;
            padding: ${(props) => props.theme.margins.sectionBig};
            overflow-y: auto;
            overflow-x: hidden;
        }

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
            top: ${(props) => props.theme.margins.extraBig};
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.tablet}) {
        &.shown .close-button {
            display: flex;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.smallerMobile}) {
        .animated-content {
            width: 100%;

            .container {
                height: 100svh;
                width: 100%;
                padding:  ${(props) => props.theme.margins.sectionMedium};
            }

            button {
                padding: ${(props) => props.theme.margins.sectionMedium};
                border-radius: ${(props) => props.theme.borderRadiuses.big};
            }

            .logo {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: ${(props) => props.theme.margins.medium};
            }

            .close-button {
                position: relative;
                top: auto;
                right: auto;
            }
        }
    }
`

export default StyledSideMenu