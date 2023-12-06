import styled from 'styled-components'

const StyledBodyColumns = styled.div`
    position: relative;
    display: flex;
    gap: ${(props) => props.theme.margins.big};
    padding: ${(props) => props.theme.margins.sectionBig};
    padding-top: 92px;
    box-sizing: border-box;
`

export default StyledBodyColumns