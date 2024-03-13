import styled from 'styled-components'

const StyledFilePage = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${(props) => props.theme.margins.sectionBig};
    margin-top: 0;

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        margin: ${(props) => props.theme.margins.sectionMedium};
    }
`

export default StyledFilePage