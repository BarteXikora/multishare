import styled from 'styled-components'

const StyledImagePreviewSection = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    .loading {
        margin: ${(props) => props.theme.margins.sectionBig};
        padding: ${(props) => props.theme.margins.sectionBig};
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        margin: 0;
        padding: 0;
        border-radius: ${(props) => props.theme.borderRadiuses.big};
    }
`

export default StyledImagePreviewSection