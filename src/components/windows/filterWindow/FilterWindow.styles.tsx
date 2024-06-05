import styled from 'styled-components'

const StyledFilterWindow = styled.div`
    .main button {
        width: 100%;
    }

    .actions {
        display: flex;
        justify-content: end;
        gap: ${(props) => props.theme.margins.medium};
        margin-top: ${(props) => props.theme.margins.big};
    }
`

export default StyledFilterWindow