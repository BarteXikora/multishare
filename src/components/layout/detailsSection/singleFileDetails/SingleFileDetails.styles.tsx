import styled from 'styled-components'

const StyledSingleFileDetails = styled.div`
    .preview-section {
        width: 100%;
        min-height: 130px;
        aspect-ratio: 10/5;
        border-radius: ${(props) => props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big} 0 0;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .section {
        padding: ${(props) => props.theme.margins.small} ${(props) => props.theme.margins.big};
    }

    .section-name {
        padding: ${(props) => props.theme.margins.medium} ${(props) => props.theme.margins.big};

        h3 {
            margin: 0;
            font-size: ${(props) => props.theme.fontSizes.subtitle};
            display: flex;
            align-items: start;
            gap: ${(props) => props.theme.margins.medium};
        }
    }

    .detail-row {
        margin-bottom: ${(props) => props.theme.margins.medium};

        .detail-name {
            font-weight: bold;
        }
    }
`

export default StyledSingleFileDetails