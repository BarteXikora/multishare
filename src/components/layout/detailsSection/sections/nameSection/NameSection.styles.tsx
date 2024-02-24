import styled from 'styled-components'

const StyledNameSection = styled.div`
    padding: ${(props) => props.theme.margins.small} ${(props) => props.theme.margins.big};
    padding-top: 0;
    font-weight: bold;

    .extension {
        color: ${(props) => props.theme.colors.gray4};
    }
`

export default StyledNameSection