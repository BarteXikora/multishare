import styled from 'styled-components'

const StyledUsedSpace = styled.div`
    button {
        flex-direction: column;
        align-items: start;
    }

    h2 {
        margin: 0;
        font-size: ${(props) => props.theme.fontSizes.default};
        font-weight: normal;
    }

    .progress-bar {
        height: 8px;
        width: 100%;
        background-color: ${(props) => props.theme.colors.gray2};
        border-radius: ${(props) => props.theme.borderRadiuses.big};

        .progress {
            height: 100%;
            max-width: 100%;
            background-color: ${(props) => props.theme.colors.primary6};
            border-radius: ${(props) => props.theme.borderRadiuses.big};
        }
    }

    span {
        font-weight: bold;
    }
`

export default StyledUsedSpace