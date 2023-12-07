import styled from 'styled-components'

const StyledContentSection = styled.main`
    margin-top: ${(props) => props.theme.margins.big};
    margin-bottom: ${(props) => props.theme.margins.extraBig};

    h2 {
        margin: 0;
        margin-bottom: ${(props) => props.theme.margins.small};
    }

    button {
        white-space: nowrap;
        overflow: hidden;
    }

    .content {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-gap: ${(props) => props.theme.margins.medium};
    }

    .folders-section {
        margin-bottom: ${(props) => props.theme.margins.extraBig};
    }
`

export default StyledContentSection