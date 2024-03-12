import styled from 'styled-components'

const StyledNotFoundPage = styled.main`
    margin-top: ${(props) => props.theme.margins.extraBig};

    .content {
        display: block;
        text-align: center;
        margin-bottom: ${(props) => props.theme.margins.extraBig};

        .logo {
            margin-bottom: ${(props) => props.theme.margins.big};
        }

        h1 {
            margin: 0;
            margin-bottom: ${(props) => props.theme.margins.small};
        }

        p {
            margin: 0;
            margin-bottom: ${(props) => props.theme.margins.big};
        }

        b {
            display: inline-block;
            width: 10px;
        }

        button {
            margin: 0 auto;
        }
    }
`

export default StyledNotFoundPage