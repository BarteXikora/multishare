import styled from 'styled-components'

const StyledErrorPage = styled.div`
    display: inline-flex;
    align-items: center;
    gap: ${(props) => props.theme.margins.extraBig};
    background-color: ${(props) => props.theme.colors.gray2};
    padding: ${(props) => props.theme.margins.sectionBig};
    margin: ${(props) => props.theme.margins.sectionBig};
    border-radius: ${(props) => props.theme.borderRadiuses.big};
    pointer-events: all;

    .icon {
        display: flex;
        align-items: center;

        img {
            width: 55px;
        }
    }

    h2 {
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        color: ${(props) => props.theme.colors.wrong6};
        margin: 0;
    }

    p {
        margin: 0;
    }

    .reload-button {
        margin-top: ${(props) => props.theme.margins.big};
        background-color: ${(props) => props.theme.colors.gray6};
        color: ${(props) => props.theme.colors.white};

        &:hover {
            background-color: ${(props) => props.theme.colors.black};
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        margin-top: ${(props) => props.theme.margins.small};
        display: flex;
        justify-content: center;
    }
`

export default StyledErrorPage