import styled from 'styled-components'

const StyledLoadingContent = styled.div`
    margin-top: ${(props) => props.theme.margins.big};
    display: inline-flex;
    align-items: center;
    gap: ${(props) => props.theme.margins.big};
    background-color: ${(props) => props.theme.colors.gray2};
    padding: ${(props) => props.theme.margins.small + ' ' + props.theme.margins.big};
    border-radius: ${(props) => props.theme.borderRadiuses.big};
    pointer-events: all;
    
    h2 {
        font-size: ${(props) => props.theme.fontSizes.subtitle};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        margin-top: ${(props) => props.theme.margins.small};
        display: flex;
        justify-content: center;
    }
`

export default StyledLoadingContent