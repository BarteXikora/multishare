import styled from 'styled-components'

const StyledSingleFolderDetails = styled.div`
    h4 {
        margin: 0;
        margin-bottom: ${(props) => props.theme.margins.small};
    }

    .section-icon {
        text-align: center;
        background-color: ${(props) => props.theme.colors.black};
        border-radius: ${(props) => props.theme.borderRadiuses.big} ${(props) => props.theme.borderRadiuses.big} 0 0;
    }

    .icon {
        position: relative;
        display: inline-block;
        width: 40%;
        padding: ${(props) => props.theme.margins.big} 0;

        .icon-folder {
            width: 100%;
        }
    }

    .icon-star {
        position: absolute;
        width: 35px;
        bottom: 20%;
        right: -10%;
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

    .section {
        padding: ${(props) => props.theme.margins.small} ${(props) => props.theme.margins.big};
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

    .detail-row {
        margin-bottom: ${(props) => props.theme.margins.medium};

        .detail-name {
            font-weight: bold;
        }
    }
`

export default StyledSingleFolderDetails