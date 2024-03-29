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
        padding: ${(props) => props.theme.margins.sectionMedium};
        display: flex;
        flex-direction: column;
        gap: ${(props) => props.theme.margins.small};
        text-align: left;

        h2 {
            font-size: ${(props) => props.theme.fontSizes.subtitle};
            margin: 0;
        }

        p {
            margin: 0;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.smallerMobile}) {
        .icon {
            width: 80px;
        }

        .name p {
            display: none;
        }
    }
`

export default StyledProject