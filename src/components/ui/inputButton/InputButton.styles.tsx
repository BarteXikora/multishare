import styled from 'styled-components'

const StyledInputButton = styled.form`
    display: flex;

    .inputbutton-input {
        width: 100%;
        border-top-right-radius: 0;
        border-end-end-radius: 0;
    }

    .inputbutton-button {
        border-start-start-radius: 0;
        border-bottom-left-radius: 0;
        white-space: nowrap;
    }
`

export default StyledInputButton