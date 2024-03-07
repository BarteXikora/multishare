import styled from 'styled-components'

const StyledProjectsTopBar = styled.header`
    display: flex;
    justify-content: space-between;
    position: fixed;
    gap: ${(props) => props.theme.margins.big};
    width: calc(100% - 300px);
    left: 300px;
    background-color: ${(props) => props.theme.colors.white};
    padding: ${(props) => props.theme.margins.sectionBig};
    box-sizing: border-box;
    z-index: 1000;

    h1 {
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.margins.medium};
        margin: 0;
        font-size: ${(props) => props.theme.fontSizes.title};

        img {
            width: 45px;
        }
    }

    .main {
        display: flex;
        justify-content: center;
        gap: ${(props) => props.theme.margins.big};
    }

    .side {
        display: flex;
        width: 50%;
        gap: ${(props) => props.theme.margins.medium};

        button {
            white-space: nowrap;
        }
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
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        padding: ${(props) => props.theme.margins.sectionMedium};

        .side {
            width: auto;
        }

        .create-project-btn span {
            display: none;
        }
    }
`

export default StyledProjectsTopBar