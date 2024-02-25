import styled from 'styled-components'

const StyledDropSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .content {
        display: flex;
        flex-direction: column;
        gap: ${(props) => props.theme.margins.medium};
        text-align: center;
        padding: ${(props) => props.theme.margins.sectionBig};
        margin-bottom: ${(props) => props.theme.margins.extraBig};
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        color: ${(props) => props.theme.colors.gray4};
        font-weight: bold;
    }

    img {
        width: 70%;
        align-self: center;
    }
`

export default StyledDropSection