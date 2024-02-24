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
        white-space: nowrap;
        width: 100%;
        max-width: 50vw;
        overflow: hidden;
        padding: 0;
        height: 100%;

        &:hover .icon-arrow {
            background-color: ${(props) => props.theme.colors.gray3};
        }

        .project-name {
            width: 100%;
            padding: ${(props) => props.theme.margins.sectionMedium}; 
        }

        .icon-arrow {
            display: flex;
            background-color: ${(props) => props.theme.colors.gray2}; 
            height: 100%;
            padding: 0 ${(props) => props.theme.margins.medium};
            transition: ${(props) => props.theme.transition};
        }
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

            .project-name {
                width: auto;
                overflow: hidden;
            }
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