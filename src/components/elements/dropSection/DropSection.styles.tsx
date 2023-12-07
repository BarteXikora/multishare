import styled from 'styled-components'

const StyledDropSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.theme.borderRadiuses.small};
    border: 2px dashed ${(props) => props.theme.colors.black};

    .content {
        display: flex;
        flex-direction: column;
        gap: ${(props) => props.theme.margins.medium};
        text-align: center;
        padding: ${(props) => props.theme.margins.sectionBig};
        margin-bottom: ${(props) => props.theme.margins.extraBig};
        font-size: ${(props) => props.theme.fontSizes.subtitle};
    }

    img {
        width: 150px;
    }
`

export default StyledDropSection