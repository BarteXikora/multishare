import styled from 'styled-components'

const StyledFilePage = styled.div`
    margin: ${(props) => props.theme.margins.sectionBig};

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        margin: ${(props) => props.theme.margins.sectionMedium};
    }
`

export default StyledFilePage