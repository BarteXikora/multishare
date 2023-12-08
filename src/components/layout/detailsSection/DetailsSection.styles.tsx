import styled from 'styled-components'

const StyledDetailsSection = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 98px;
    height: calc(100vh - 98px - ${(props) => props.theme.margins.big});
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.gray2};
    border-radius: ${(props) => props.theme.borderRadiuses.big};

    .main-content {
        height: 100%;
        padding: ${(props) => props.theme.margins.big};
    }
`

export default StyledDetailsSection