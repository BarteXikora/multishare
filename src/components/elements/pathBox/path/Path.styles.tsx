import styled from 'styled-components'

const StyledPath = styled.div`
    display: flex;
    gap: ${(props) => props.theme.margins.small};
    white-space: nowrap;
    
    .path-button {
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        font-weight: bold;

        &.path-button-not-found {
            color: ${(props) => props.theme.colors.wrong6};
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        display: none;
    }
`

export default StyledPath