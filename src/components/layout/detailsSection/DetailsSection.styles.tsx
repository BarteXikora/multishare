import styled from 'styled-components'

const StyledDetailsSection = styled.div`
    position: sticky;
    top: 98px;
    height: calc(100vh - 98px - ${(props) => props.theme.margins.big});
    z-index: 2000;

    .animated-content {
        display: flex;
        flex-direction: column;
        height: 100%;
        box-sizing: border-box;
        background-color: ${(props) => props.theme.colors.gray2};
        border-radius: ${(props) => props.theme.borderRadiuses.big};

        .close-button {
            display: none;
            position: absolute;
            width: auto;
            left: -60px;
            margin-top: ${(props) => props.theme.margins.medium};
        }

        .main {
            height: 100%;
        }
    }

    &.shown .close-button {
        display: flex;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        .animated-content {
            position: fixed;
            height: calc(100vh - (${(props) => props.theme.margins.big} * 2));
            margin: ${(props) => props.theme.margins.sectionBig};
            top: 0;
            width: 300px;
            right: 0;

            .upload-list {
                display: none;
            }
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        .animated-content {
            height: calc(100vh - (${(props) => props.theme.margins.medium} * 2));
            margin: ${(props) => props.theme.margins.sectionMedium};
        }
    }
`

export default StyledDetailsSection