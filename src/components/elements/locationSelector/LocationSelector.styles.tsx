import styled from 'styled-components'

const StyledLocationSelector = styled.div`
    h3 {
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        margin: 0;
        /* font-weight: normal; */
    }

    .path {
        display: flex;
        gap: ${(props) => props.theme.margins.small};
        align-items: center;
        background-color: ${(props) => props.theme.colors.black};
        color: ${(props) => props.theme.colors.white};
        border-radius: ${(props) => props.theme.borderRadiuses.small};
        margin-bottom: ${(props) => props.theme.margins.small};
    }

    .body {
        height: 160px;
        overflow-y: auto;
        padding-bottom: ${(props) => props.theme.margins.medium};

        button {
            width: 100%;
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