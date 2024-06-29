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
        height: 100%;
        

        img {
            width: 38px;
            height: 38px;
        }
    }

    .current-project-button {
        transform: translateX(${(props) => '-' + props.theme.margins.medium});
        white-space: nowrap;
        overflow: hidden;
        max-width: 30vw;
    }

    .desktop-button {
        white-space: nowrap;
    }

    .mobile-button {
        display: none;
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;
        max-width: 50vw;
        background-color: ${(props) => props.theme.colors.gray2};
        border-radius: ${(props) => props.theme.borderRadiuses.big};
        transition: ${(props) => props.theme.transition};

        &:has(.project-name:hover) {
            background-color: ${(props) => props.theme.colors.gray3};
        }

        .project-name {
            width: 100% !important;
            min-width: 25vw;
            overflow: hidden;
            font-size: ${(props) => props.theme.fontSizes.subtitle};
            font-weight: bold;
            white-space: nowrap;
            background-color: transparent;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.tablet}) {
        width: auto;

        .current-project-button, .desktop-button {
            display: none;
        }

        .mobile-button {
            display: flex;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.smallerMobile}) {
        width: 100%;

        .mobile-button {
            width: 100%;
            max-width: 100%;
            justify-content: space-between;

            .project-name {
                width: 0;
                padding: ${(props) => props.theme.margins.sectionMedium}; 
                overflow: visible;
            }
        }
    }
`

export default StyledSelectProject