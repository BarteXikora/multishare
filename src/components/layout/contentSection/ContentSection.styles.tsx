import styled from 'styled-components'

const StyledContentSection = styled.main`
    position: relative;
    pointer-events: none;
    user-select: none;
    padding-left: ${(props) => props.theme.margins.extraBig};

    .infos {
        display: flex;
        flex-direction: column;
        gap: ${(props) => props.theme.margins.medium};
        margin: ${(props) => props.theme.margins.medium + ' 0 ' + props.theme.margins.big + ' 0'};
    }

    .content-margin {
        padding-top: ${(props) => props.theme.margins.big};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        padding-right: ${(props) => props.theme.margins.extraBig};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        padding: 0 ${(props) => props.theme.margins.medium};

        .infos {
            margin: ${(props) => props.theme.margins.extraBig + ' 0 ' + props.theme.margins.medium + ' 0'};
        }

        .content-margin {
            padding-top: ${(props) => props.theme.margins.small};
        }
    }
`

export default StyledContentSection