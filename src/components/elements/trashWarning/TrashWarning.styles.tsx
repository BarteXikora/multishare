import styled from 'styled-components'

const StyledTrashWarning = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${(props) => props.theme.margins.medium};
    margin-bottom: ${(props) => props.theme.margins.big};
    padding: ${(props) => props.theme.margins.sectionMedium};
    background-color: ${(props) => props.theme.colors.warning6};
    border-radius: ${(props) => props.theme.borderRadiuses.big};
    font-weight: bold;
    pointer-events: all;

    .info-box {
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.margins.small};
    }
`

export default StyledTrashWarning