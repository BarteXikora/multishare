import styled from 'styled-components'

const StyledNoPreviewSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${(props) => props.theme.margins.medium};
    margin: ${(props) => props.theme.margins.sectionBig};
    padding: ${(props) => props.theme.margins.sectionBig};

    .icon img {
        border-radius: ${(props) => props.theme.borderRadiuses.big};
    }

    h3 {
        margin: 0;
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        color: ${(props) => props.theme.colors.gray5};
    }
`

export default StyledNoPreviewSection