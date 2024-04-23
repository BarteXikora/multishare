import styled from 'styled-components'

const StyledConfirmDeleteWindow = styled.div`
    h2 {
        margin: 0;
        font-size: ${(props) => props.theme.fontSizes.subtitle};
    }

    h3 {
        margin: 0;
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        margin-bottom: ${(props) => props.theme.margins.small};
    }

    p {
        margin: 0;
    }

    .error {
        color: ${(props) => props.theme.colors.wrong6};
    }

    .info-section {
        margin-bottom: ${(props) => props.theme.margins.big};
    }

    .details-section {
        margin-bottom: ${(props) => props.theme.margins.big};
    }

    .actions-section {
        display: flex;
        gap: ${(props) => props.theme.margins.medium};
        justify-content: end;
    }
`

export default StyledConfirmDeleteWindow