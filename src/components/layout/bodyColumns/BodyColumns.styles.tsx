import styled from 'styled-components'

const StyledBodyColumns = styled.div`
    position: relative;
    display: flex;
    gap: ${(props) => props.theme.margins.big};
    padding: ${(props) => props.theme.margins.sectionBig};
    padding-top: 98px;
    box-sizing: border-box;

    .main-column {
        width: 100%;
    }

    .aside-column {
        width: 300px;
        flex-shrink: 0;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        gap: 0;

        .aside-column {
            width: 0;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        padding-top: 74px;
        padding: ${(props) => props.theme.margins.sectionMedium};
    }
`

export default StyledBodyColumns