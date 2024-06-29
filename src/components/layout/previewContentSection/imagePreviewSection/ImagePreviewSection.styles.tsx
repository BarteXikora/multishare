import styled from 'styled-components'

const StyledImagePreviewSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    .loading {
        margin: ${(props) => props.theme.margins.sectionBig};
        padding: ${(props) => props.theme.margins.sectionBig};
    }

    img {
        max-width: 100%;
        margin: 0;
        padding: 0;
        border-radius: ${(props) => props.theme.borderRadiuses.big};
    }

    .error {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: ${(props) => props.theme.margins.sectionBig};
        padding: ${(props) => props.theme.margins.sectionBig};

        .icon {
            width: 50px;
        }

        h3 {
            color: ${(props) => props.theme.colors.wrong6};
            font-size: ${(props) => props.theme.fontSizes.subtitle};
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        .error {
            text-align: center;
        }
    }
`

export default StyledImagePreviewSection