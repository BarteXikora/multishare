import styled from 'styled-components'

const StyledCourtain = styled.div`
    position: fixed;
    z-index: 1500;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.black};
    opacity: .85;

    &.shown-window {
        z-index: 2000;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        &.shown-details-section {
            z-index: 2000;
        }
    }
`

export default StyledCourtain