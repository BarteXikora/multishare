import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    position: sticky;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.white};
    gap: ${(props) => props.theme.margins.medium};
    width: 100%;
    padding-left: ${(props) => props.theme.margins.extraBig};
    box-sizing: border-box;
    top: 98px;
    z-index: 1000;

    @media (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        padding-right: ${(props) => props.theme.margins.extraBig};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        padding: 0 ${(props) => props.theme.margins.medium};
        padding-top: ${(props) => props.theme.margins.small};
        top: 62px;
    }
`

export default StyledHeader