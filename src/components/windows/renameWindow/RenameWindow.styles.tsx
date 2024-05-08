import styled from 'styled-components'

const StyledRenameWindow = styled.div`
    h2 {
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        margin: 0;
    }

    p {
        margin: 0;
    }

    .info-section {
        margin-bottom: ${(props) => props.theme.margins.medium};
    }

    .warning {
        margin-top: ${(props) => props.theme.margins.small};
    }

    .wrong {
        color: ${(props) => props.theme.colors.wrong6};
        font-weight: bold;
    }
`

export default StyledRenameWindow