import styled from 'styled-components'

const StyledNameSection = styled.div`
    padding: 0 ${(props) => props.theme.margins.big};
    font-weight: bold;

    .extension {
        color: ${(props) => props.theme.colors.gray4};
    }
`

export default StyledNameSection