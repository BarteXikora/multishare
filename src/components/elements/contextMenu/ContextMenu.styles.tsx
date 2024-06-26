import styled from 'styled-components'

const StyledContextMenu = styled.div`
    position: fixed;
    display: flex;
    gap: 0;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    box-sizing: border-box;
    white-space: nowrap;
    border-radius: ${(props) => props.theme.borderRadiuses.small};
    border: 2px solid ${(props) => props.theme.colors.black};
    box-shadow: 6px 6px 18px 0 ${(props) => props.theme.colors.black};
    top: 0;
    left: 0;
    z-index: 200;
    pointer-events: all;

    button {
        padding: ${(props) => props.theme.margins.medium + ' ' + props.theme.margins.big};
        border-radius: 0;
    }

    hr {
        width: 100%;
    }
`

export default StyledContextMenu