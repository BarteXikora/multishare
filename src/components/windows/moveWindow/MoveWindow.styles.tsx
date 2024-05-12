import styled from 'styled-components'

const StyledMoveWindow = styled.div`
    .info-section h2 {
        margin: 0;
        margin-bottom: ${(props) => props.theme.margins.big};
    }

    .actions-section {
        margin-top: ${(props) => props.theme.margins.big};

        .buttons {
            display: flex;
            gap: ${(props) => props.theme.margins.small};
            justify-content: end;
        }

        .warning {
            height: 18px;
            color: ${(props) => props.theme.colors.wrong6};
            font-weight: bold;
        }
    }
`

export default StyledMoveWindow