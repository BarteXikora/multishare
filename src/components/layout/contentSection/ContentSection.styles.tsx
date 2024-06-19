import styled from 'styled-components'

const StyledContentSection = styled.main`
    position: relative;
    pointer-events: none;
    user-select: none;

    .content-margin {
        padding-top: ${(props) => props.theme.margins.big};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        .content-margin {
            padding-top: ${(props) => props.theme.margins.small};
        }
    }
`

export default StyledContentSection