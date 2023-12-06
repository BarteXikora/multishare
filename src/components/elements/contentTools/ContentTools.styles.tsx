import styled from 'styled-components'

const StyledContentTools = styled.div`
    display: flex;
    justify-content: space-between;
    gap: ${(props) => props.theme.margins.big};
    background-color: ${(props) => props.theme.colors.white};

    section {
        display: flex;
        gap: ${(props) => props.theme.margins.small};
    }

    .selected-tools {
        display: none;
    }
`

export default StyledContentTools