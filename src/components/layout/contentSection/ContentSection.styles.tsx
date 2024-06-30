import styled from 'styled-components'

const StyledContentSection = styled.main`
    position: relative;
    pointer-events: none;
    user-select: none;
    padding-left: ${(props) => props.theme.margins.extraBig};

    .content-margin {
        padding-top: ${(props) => props.theme.margins.big};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        padding-right: ${(props) => props.theme.margins.extraBig};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        padding: 0 ${(props) => props.theme.margins.medium};

        .content-margin {
            padding-top: ${(props) => props.theme.margins.small};
        }
    }
`

export default StyledContentSection