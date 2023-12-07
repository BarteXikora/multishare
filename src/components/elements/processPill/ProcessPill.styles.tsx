import styled from 'styled-components'

const StyledProcessPill = styled.div`
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.margins.medium};
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    padding: ${(props) => props.theme.margins.sectionMedium};
    border-radius: ${(props) => props.theme.borderRadiuses.big};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`

export default StyledProcessPill