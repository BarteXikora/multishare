import styled from 'styled-components'

const StyledTopBar = styled.nav`
    display: flex;
    position: fixed;
    gap: ${(props) => props.theme.margins.big};
    width: calc(100% - 300px);
    left: 300px;
    background-color: ${(props) => props.theme.colors.white};
    padding: ${(props) => props.theme.margins.sectionBig};
    box-sizing: border-box;
    z-index: 1000;

    .search {
        display: flex;
        width: 50%;
    }
`

export default StyledTopBar