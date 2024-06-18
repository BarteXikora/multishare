import styled from 'styled-components'

const StyledMovePill = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.margins.medium};
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    padding: ${(props) => props.theme.margins.sectionMedium};
    box-sizing: border-box;
    white-space: nowrap;
    border-radius: ${(props) => props.theme.borderRadiuses.small};
    border: 2px solid ${(props) => props.theme.colors.black};
    box-shadow: 6px 6px 18px 0 ${(props) => props.theme.colors.black};
    top: 0;
    left: 0;
    z-index: 100;

    h3 {
        margin: 0;
    }
`

export default StyledMovePill