import styled from 'styled-components'

const StyledSideMenu = styled.nav`
    position: fixed;
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    width: 300px;
    height: 100%;
    box-sizing: border-box;
    padding: ${(props) => props.theme.margins.sectionBig};
`

export default StyledSideMenu