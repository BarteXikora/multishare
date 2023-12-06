import styled from 'styled-components'

const StyledTopBar = styled.nav`
    display: flex;
    position: fixed;
    width: calc(100% - 300px);
    left: 300px;
    background-color: ${(props) => props.theme.colors.white};
    padding: ${(props) => props.theme.margins.sectionBig};
    box-sizing: border-box;
`

export default StyledTopBar