import styled from 'styled-components'

const StyledPathButton = styled.div`
    display: flex;

    button {
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        font-weight: bold;
        white-space: nowrap;
    }    
`

export default StyledPathButton