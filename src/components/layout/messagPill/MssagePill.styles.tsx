import styled from 'styled-components'

const StyledMessagePill = styled.div`
    position: fixed;
    bottom: ${(props) => props.theme.margins.medium};
    left: calc(${(props) => props.theme.margins.extraBig} + 300px);
    padding: ${(props) => props.theme.margins.sectionMedium};
    border-radius: ${(props) => props.theme.borderRadiuses.small};
    border-left: 8px solid ${(props) => props.theme.colors.wrong6};
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.wrong6};
    z-index: 3000;
`

export default StyledMessagePill
