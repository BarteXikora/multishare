import styled from 'styled-components'

const StyledSeachInput = styled.form`
    display: flex;
    width: 100%;

    input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        width: 100%;
    }

    button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;

        &:hover {
            background-color: ${(props) => props.theme.colors.primary3};
        }
    }
`

export default StyledSeachInput