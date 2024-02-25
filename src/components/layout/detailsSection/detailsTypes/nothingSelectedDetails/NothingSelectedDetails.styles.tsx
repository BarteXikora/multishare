import styled from 'styled-components'

const StyledNothingSelectedDetails = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;

    .separator {
        padding: 0 ${(props) => props.theme.margins.big};
    }

    hr {
        width: 100%;
        box-sizing: border-box;
        margin: 0;
    }
`

export default StyledNothingSelectedDetails