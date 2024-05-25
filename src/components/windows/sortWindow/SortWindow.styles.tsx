import styled from 'styled-components'

const StyledSortWindow = styled.div`
    .sort-section {
        margin: ${(props) => props.theme.margins.medium} 0;

        h2 {
            font-size: ${(props) => props.theme.fontSizes.subtitle};
            margin: 0;
            margin-bottom: ${(props) => props.theme.margins.small};
        }

        button {
            width: 100%;
        }
    }

    .actions {
        display: flex;
        gap: ${(props) => props.theme.margins.small};
        justify-content: end;
    }
`

export default StyledSortWindow