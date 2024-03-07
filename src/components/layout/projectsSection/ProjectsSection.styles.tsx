import styled from 'styled-components'

const StyledProjectsSection = styled.section`
    padding: ${(props) => props.theme.margins.sectionBig};
    padding-top: calc(${(props) => props.theme.margins.big} + 98px);

    h2 {
        margin: 0;
        margin-bottom: ${(props) => props.theme.margins.medium};
        font-size: ${(props) => props.theme.fontSizes.subtitle};
    }

    .content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: ${(props) => props.theme.margins.medium};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        .content {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        padding: ${(props) => props.theme.margins.sectionSmall};
        padding-top: calc(${(props) => props.theme.margins.big} + 74px);

        .content {
            grid-template-columns: 1fr;
        }
    }
`

export default StyledProjectsSection