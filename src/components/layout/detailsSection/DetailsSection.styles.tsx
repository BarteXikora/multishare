import styled from 'styled-components'

const StyledDetailsSection = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 98px;
    height: calc(100vh - 98px - ${(props) => props.theme.margins.big});
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.gray2};
    border-radius: ${(props) => props.theme.borderRadiuses.big};

    .main-content {
        height: 100%;
        padding: ${(props) => props.theme.margins.big};
    }

    .close-button {
        display: none;
        position: absolute;
        width: auto;
        left: -60px;
        margin-top: ${(props) => props.theme.margins.medium};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        position: fixed;
        z-index: 2000;
        height: calc(100vh - (${(props) => props.theme.margins.big} * 2));
        margin: ${(props) => props.theme.margins.sectionBig};
        top: 0;
        right: auto;
        left: 100vw;
        width: 300px;

        &.shown {
            left: auto;
            right: 0;
            
            .close-button {
                display: flex;
            }
        }

        .process-pill {
            display: none;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        height: calc(100vh - (${(props) => props.theme.margins.medium} * 2));
        margin: ${(props) => props.theme.margins.sectionMedium};
    }
`

export default StyledDetailsSection