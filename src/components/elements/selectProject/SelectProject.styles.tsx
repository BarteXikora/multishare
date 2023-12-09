import styled from 'styled-components'

const StyledSelectProject = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h1 {
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.margins.medium};
        font-size: ${(props) => props.theme.fontSizes.title};
        margin: 0;

        img {
            width: 38px;
            height: 38px;
        }
    }

    .mobile-button {
        display: none;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.tablet}) {
        width: auto;

        h1, .desktop-button {
            display: none;
        }

        .mobile-button {
            display: flex;
            font-weight: bold;
            font-size: ${(props) => props.theme.fontSizes.subtitle};
            flex-shrink: 0;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.smallerMobile}) {
        width: 100%;

        .mobile-button {
            width: 100%;
            justify-content: space-between;
        }
    }
`

export default StyledSelectProject