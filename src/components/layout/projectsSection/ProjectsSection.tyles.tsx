import styled from 'styled-components'

const StyledProjectsSection = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${(props) => props.theme.margins.medium};
    padding: ${(props) => props.theme.margins.sectionBig};
    padding-top: calc(${(props) => props.theme.margins.big} + 98px);

    @media (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        padding: ${(props) => props.theme.margins.sectionSmall};
        padding-top: calc(${(props) => props.theme.margins.big} + 74px);
        grid-template-columns: 1fr;
    }
`

export default StyledProjectsSection