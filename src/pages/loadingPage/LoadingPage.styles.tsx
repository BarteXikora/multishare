import styled from 'styled-components'

const StyledLoadingPage = styled.div`
    margin-top: ${(props) => props.theme.margins.extraBig};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${(props) => props.theme.margins.small};

    h2 {
        font-size: ${(props) => props.theme.fontSizes.default};
        color: ${(props) => props.theme.colors.gray4};
    }
`

export default StyledLoadingPage