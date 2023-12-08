import styled from 'styled-components'

const StyledSelectProject = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h1 {
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.margins.medium};
        font-size: ${(props) => props.theme.fontSizes.title};
        margin: 0;

        img {
            width: 38px;
            height: 38px;
        }
    }
`

export default StyledSelectProject