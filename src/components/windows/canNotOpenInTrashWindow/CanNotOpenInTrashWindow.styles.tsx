import styled from 'styled-components'

const StyledCanNotOpenInTrashWindow = styled.div`
    h2 {
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        margin: 0;
    }

    p {
        font-size: ${(props) => props.theme.fontSizes.default};
        margin: 0;
    }

    .info-section {
        margin-bottom: ${(props) => props.theme.margins.big};
    }

    .action-section {
        display: flex;
        justify-content: end;
        gap: ${(props) => props.theme.margins.medium};
    }
`

export default StyledCanNotOpenInTrashWindow