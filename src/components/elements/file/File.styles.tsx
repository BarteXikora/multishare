import styled from 'styled-components'
import Button from '../../ui/button/Button'

const StyledFile = styled(Button)`
    position: relative;
    flex-direction: column;
    gap: 0;
    padding: 0;

    .preview {
        position: relative;
        background-color: ${(props) => props.theme.colors.correct6};
        width: 100%;
        aspect-ratio: 5 / 2;
    }

    .extension {
        position: absolute;
        top: 0;
        right: 0;
        background-color: ${(props) => props.theme.colors.gray2};
        padding: ${(props) => props.theme.margins.sectionSmall};
        border-bottom-left-radius: ${(props) => props.theme.borderRadiuses.big};
        font-weight: bold;
        transition: ${(props) => props.theme.transition};
    }

    .file-bar {
        display: flex;
        width: 100%;
    }

    .file-name {
        display: flex;
        align-items: center;
        height: 50px;
        box-sizing: border-box;
        padding: ${(props) => props.theme.margins.sectionMedium};
    }

    .file-options {
        position: absolute;
        display: flex;
        align-items: center;
        bottom: 0;
        right: 0;
    }

    .star {
        display: flex;
        align-items: center;
        background-color: ${(props) => props.theme.colors.gray2};
        padding: ${(props) => props.theme.margins.small};
        padding-right: 0;
        transition: ${(props) => props.theme.transition};
    }

    button {
        border-radius: 0;

        &:hover {
            background-color: ${(props) => props.theme.colors.primary3};
        }
    }

    &:hover {
        .extension {
            background-color: ${(props) => props.theme.colors.gray3};
        }

        .star {
            background-color: ${(props) => props.theme.colors.gray3};
        }
    }
`

export default StyledFile