import styled from 'styled-components'

const StyledNewFolderWindow = styled.div`
    .path-section {
        margin-bottom: ${(props) => props.theme.margins.big};
    }

    h2 {
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        margin: 0;
    }

    .path {
        display: flex;
        align-items: center;

        span {
            display: inline-block;

            &:last-of-type {
                font-weight: bold;
            }
        }
    }

    .validation-info {
        margin-top: ${(props) => props.theme.margins.small};
        margin-left: 5px;
        font-weight: bold;
        color: ${(props) => props.theme.colors.wrong6};
    }
`

export default StyledNewFolderWindow