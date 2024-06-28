import styled from 'styled-components'
import Button from '../../ui/button/Button'

const StyledProject = styled(Button)`
    padding: 0;
    border-radius: ${(props) => props.theme.borderRadiuses.big};

    .preview {
        display: flex;
        width: 180px;
        flex-shrink: 0;
        height: 100%;
        background-color: ${(props) => props.theme.colors.black};
        border-radius: ${(props) => props.theme.borderRadiuses.big + ' 0 0 ' + props.theme.borderRadiuses.big};
    }

    .icon {
        align-items: center;
        justify-content: center;

        img {
            padding: ${(props) => props.theme.margins.sectionSmall};
        }
    }

    .image {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .name {
        position: relative;
        padding: ${(props) => props.theme.margins.sectionMedium};
        display: flex;
        flex-direction: column;
        gap: ${(props) => props.theme.margins.small};
        text-align: left;
        width: 100%;

        h2 {
            font-size: ${(props) => props.theme.fontSizes.subtitle};
            margin: 0;
        }

        p {
            margin: 0;
        }

        .selected-pill {
            position: absolute;
            top: 0;
            right: 0;
            margin: ${(props) => props.theme.margins.sectionSmall};
            padding: ${(props) => props.theme.margins.sectionSmall};
            background-color: ${(props) => props.theme.colors.correct4};
            border-radius: ${(props) => props.theme.borderRadiuses.small};
            color: ${(props) => props.theme.colors.black};
            font-weight: bold;
            border: 1px solid ${(props) => props.theme.colors.black};
        }
    }

    .mobile-icon {
        display: none;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.smallerMobile}) {
        padding: ${(props) => props.theme.margins.sectionMedium};
        display: flex;
        align-items: center;
        gap: 0;

        .mobile-icon {
            display: flex;
            padding: 0 ${(props) => props.theme.borderRadiuses.small};
        }

        .preview {
            display: none;
        }

        .name p {
            display: none;
        }
    }
`

export default StyledProject