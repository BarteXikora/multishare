import styled from 'styled-components'

const StyledTextPreviewSection = styled.div`
    padding: ${(props) => props.theme.margins.sectionBig};
    margin: ${(props) => props.theme.margins.sectionBig};
    border: 2px solid ${(props) => props.theme.colors.gray3};
    border-radius: ${(props) => props.theme.borderRadiuses.small};
    font-size: ${(props) => props.theme.fontSizes.default};

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h3 {
        margin: 0;
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        white-space: nowrap;
        overflow: hidden;
    }

    .edit-button {
        background-color: ${(props) => props.theme.colors.gray6};
        color: ${(props) => props.theme.colors.white};

        &:hover {
            background-color: ${(props) => props.theme.colors.black};
        }
    }

    hr {
        border-top: 2px solid ${(props) => props.theme.colors.gray3};
        margin: ${(props) => props.theme.margins.medium} 0;
        border-bottom: none;
    }

    p {
        margin: 0;
        white-space: pre-line;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        padding: ${(props) => props.theme.margins.sectionMedium};
        margin: ${(props) => props.theme.margins.sectionMedium};
    }
`

export default StyledTextPreviewSection