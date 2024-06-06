import styled from 'styled-components'

const StyledNewFolderWindow = styled.div`
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