import styled from 'styled-components'

const StyledConfirmDeleteForeverWindow = styled.div`
     h2 {
        margin: 0;
        font-size: ${(props) => props.theme.fontSizes.subtitle};
    }

    h3 {
        margin: 0;
        font-size: ${(props) => props.theme.fontSizes.subtitle};
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

    .elements {
        display: flex;
        gap: ${(props) => props.theme.margins.small};
        margin-top: ${(props) => props.theme.margins.medium};
        white-space: nowrap;
        flex-wrap: wrap;
        max-width: 800px;
    }

    .element {
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.margins.medium};
        background-color: ${(props) => props.theme.colors.gray2};
        padding: ${(props) => props.theme.margins.sectionSmall};
        border-radius: ${(props) => props.theme.borderRadiuses.small};
        font-weight: bold;

        img {
            width: 16px;
        }
    }

    .actions-section {
        display: flex;
        gap: ${(props) => props.theme.margins.medium};
        justify-content: end;
    }
`

export default StyledConfirmDeleteForeverWindow