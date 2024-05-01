import styled from 'styled-components'

const StyledElementsPills = styled.div`
    display: flex;
    gap: ${(props) => props.theme.margins.small};
    white-space: nowrap;
    flex-wrap: wrap;
    max-width: 800px;

    .element {
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.margins.medium};
        background-color: ${(props) => props.theme.colors.gray2};
        padding: ${(props) => props.theme.margins.sectionSmall};
        border-radius: ${(props) => props.theme.borderRadiuses.small};
        font-weight: bold;

        img {
            width: 16px;
        }
    }
`

export default StyledElementsPills