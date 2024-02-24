import styled from 'styled-components'

const StyledDetails = styled.div`
    h4 {
        margin: 0;
        margin-bottom: ${(props) => props.theme.margins.small};
    }

    .section {
        padding: ${(props) => props.theme.margins.small} ${(props) => props.theme.margins.big};
    }

    .preview-section {
        width: 100%;
        min-height: 130px;
        aspect-ratio: 2/1;
    }

    .icon-section {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme.colors.black};
        border-radius: ${(props) => props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big} 0 0;

        .icon {
            position: relative;
        }

        .icon-folder {
            height: 50%;
        }

        .icon-star {
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }

    .preview-image {
        width: 100%;
        height: 100%;
        border-radius: ${(props) => props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big} 0 0;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .info-pill {
        display: inline-flex;
        padding: ${(props) => props.theme.margins.sectionSmall};
        background-color: ${(props) => props.theme.colors.gray3};
        border-radius: ${(props) => props.theme.borderRadiuses.small};
        margin: 0 ${(props) => props.theme.margins.small} ${(props) => props.theme.margins.small} 0;
        font-weight: bold;
        gap: ${(props) => props.theme.margins.medium};

        &.info-pill-zero {
            font-weight: normal;
            color: ${(props) => props.theme.colors.gray5};
        }
    }
    
    .section-details-list {
        .detail-row {
            margin-bottom: ${(props) => props.theme.margins.medium};

            .detail-name {
                font-weight: bold;
            }
        }
    }
`

export default StyledDetails