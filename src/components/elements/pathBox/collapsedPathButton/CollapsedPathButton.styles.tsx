import styled from 'styled-components'

const StyledCollapsedPathButton = styled.div`
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.fontSizes.subtitle};
    font-weight: bold;

    .separator {
        padding: 0 ${(props) => props.theme.margins.medium};
    }

    .dropdown-content {
        flex-direction: column;
        gap: ${(props) => props.theme.margins.small};
    }
`

export default StyledCollapsedPathButton