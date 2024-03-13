import styled from 'styled-components'

const StyledFilePage = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.margins.big};
    margin: ${(props) => props.theme.margins.sectionBig};

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        margin: ${(props) => props.theme.margins.sectionMedium};
    }
`

export default StyledFilePage