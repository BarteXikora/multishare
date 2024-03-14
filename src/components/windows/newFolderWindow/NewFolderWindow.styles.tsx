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
`

export default StyledNewFolderWindow