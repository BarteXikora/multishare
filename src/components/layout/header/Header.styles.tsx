import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    position: sticky;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.white};
    gap: ${(props) => props.theme.margins.medium};
    width: 100%;
    top: 98px;
    z-index: 1000;

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        top: 74px;
    }
`

export default StyledHeader