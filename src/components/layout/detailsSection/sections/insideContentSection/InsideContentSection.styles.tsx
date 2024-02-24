import styled from 'styled-components'

const StyledInsideContentSection = styled.div`
    padding: ${(props) => props.theme.margins.small} ${(props) => props.theme.margins.big};
    padding-top: 0;

    h4 {
        margin: 0;
        margin-bottom: ${(props) => props.theme.margins.small};
    }

    .info-pill {
        display: inline-flex;
        padding: ${(props) => props.theme.margins.sectionSmall};
        background-color: ${(props) => props.theme.colors.gray3};
        border-radius: ${(props) => props.theme.borderRadiuses.small};
        margin: 0 ${(props) => props.theme.margins.small} ${(props) => props.theme.margins.small} 0;
        font-weight: bold;
        gap: ${(props) => props.theme.margins.medium};

        &.info-pill-zero {
            font-weight: normal;
            color: ${(props) => props.theme.colors.gray5};
        }
    }
`

export default StyledInsideContentSection