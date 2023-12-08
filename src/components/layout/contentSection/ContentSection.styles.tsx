import styled from 'styled-components'

const StyledContentSection = styled.main`
    margin-top: ${(props) => props.theme.margins.big};
    margin-bottom: ${(props) => props.theme.margins.extraBig};

    h2 {
        margin: 0;
        margin-bottom: ${(props) => props.theme.margins.small};
    }

    button {
        white-space: nowrap;
        overflow: hidden;
    }

    .content {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-gap: ${(props) => props.theme.margins.medium};
    }

    .folders-section {
        margin-bottom: ${(props) => props.theme.margins.extraBig};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        .content {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.smallerMobile}) {
        .content {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
`

export default StyledContentSection