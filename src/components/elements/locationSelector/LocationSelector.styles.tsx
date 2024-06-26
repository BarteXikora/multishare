import styled from 'styled-components'

const StyledLocationSelector = styled.div`
    h3 {
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        margin: 0 !important;
    }

    .path {
        display: flex;
        gap: ${(props) => props.theme.margins.small};
        align-items: center;
        background-color: ${(props) => props.theme.colors.black};
        color: ${(props) => props.theme.colors.white};
        border-radius: ${(props) => props.theme.borderRadiuses.small};
        padding: 0 !important;
        margin-bottom: ${(props) => props.theme.margins.small};

        .path-button {
            color: ${(props) => props.theme.colors.white};
            white-space: nowrap;
            overflow: hidden;

            &:hover {
                background-color: ${(props) => props.theme.colors.gray6};
            }

            &.path-button-active {
                background-color: ${(props) => props.theme.colors.primary4};
                color: ${(props) => props.theme.colors.black};
            }
        }
    }

    .body {
        height: 160px;
        overflow-y: auto;
        padding: 0 !important;
        padding-bottom: ${(props) => props.theme.margins.medium};

        button {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
        }
    }

    .wrong {
        color: ${(props) => props.theme.colors.wrong6};
    }

    .info {
        font-weight: bold;
        padding: 0 ${(props) => props.theme.margins.small};
    }
`

export default StyledLocationSelector