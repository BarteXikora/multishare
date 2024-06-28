import styled from 'styled-components'

const StyledBodyColumns = styled.div`
    position: relative;
    display: flex;
    gap: ${(props) => props.theme.margins.big};
    padding-top: 98px;
    box-sizing: border-box;

    .main-column {
        width: 100%;
        padding: ${(props) => props.theme.margins.sectionBig};
        padding-top: 0;
        padding-right: 0;
        min-height: 100%;
        box-sizing: border-box;
    }

    .aside-column {
        width: 300px;
        flex-shrink: 0;
        padding: ${(props) => props.theme.margins.sectionBig};
        padding-top: 0;
        padding-left: 0;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        gap: 0;
        
        .main-column {
            padding: ${(props) => props.theme.margins.sectionBig};
            padding-top: 0;
        }

        .aside-column {
            width: 0;
            padding: 0;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        padding-top: calc(30px +  ${(props) => props.theme.margins.small});
        
        .main-column {
            padding: ${(props) => props.theme.margins.sectionMedium};
            min-height: 100%;
        }
    }
`

export default StyledBodyColumns