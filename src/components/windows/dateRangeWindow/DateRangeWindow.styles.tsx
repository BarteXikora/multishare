import styled from 'styled-components'

const StyledDateRangeWindow = styled.div`
    h2 {
        margin: 0;
        margin-bottom: ${(props) => props.theme.margins.medium};
    }

    h3 {
        margin: 0;
        margin-bottom: ${(props) => props.theme.margins.medium};
    }

    .columns {
        display: flex;
        gap: ${(props) => props.theme.margins.big};

        .column {
            width: 50%;
            height: 100px;
        }
    }

    .actions {
        display: flex;
        margin-top: ${(props) => props.theme.margins.big};
        gap: ${(props) => props.theme.margins.medium};
        justify-content: end;
    }

    .warning {
        height: 12px;
        margin-bottom: ${(props) => props.theme.margins.small};
        color: ${(props) => props.theme.colors.wrong6};
        font-weight: bold;
    }
`

export default StyledDateRangeWindow