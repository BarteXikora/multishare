import styled from 'styled-components'

const StyledDetailsListSection = styled.div`
    padding: ${(props) => props.theme.margins.small} ${(props) => props.theme.margins.big};

    h4 {
        margin: 0;
        margin-bottom: ${(props) => props.theme.margins.small};
    }

    .detail-row {
        margin-bottom: ${(props) => props.theme.margins.medium};

        .detail-name {
            font-weight: bold;
        }
    }
`

export default StyledDetailsListSection