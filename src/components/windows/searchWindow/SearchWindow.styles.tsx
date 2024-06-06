import styled from 'styled-components'

const StyledSearchWindow = styled.div`
    .main {
        display: flex;
        width: 100%;
        padding: ${(props) => props.theme.margins.big} 0;

        input {
            width: 100%;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        button {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    }
`

export default StyledSearchWindow