import styled from 'styled-components'
import Button from '../../ui/button/Button'

const StyledFile = styled(Button)`
    position: relative;
    pointer-events: all;
    flex-direction: column;
    gap: 0;
    padding: 0;

    .preview {
        position: relative;
        background-color: ${(props) => props.theme.colors.gray5};
        width: 100%;
        aspect-ratio: 7 / 3;
        background-position: center;
        background-size: cover;
        z-index: 1;

        &.preview-img {
            box-shadow: inset 0px 0px 47px -10px ${(props) => props.theme.colors.black};
        }
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
        position: relative;
        display: flex;
        width: 100%;
    }

    .file-name {
        display: flex;
        align-items: center;
        height: 50px;
        box-sizing: border-box;
        padding: ${(props) => props.theme.margins.sectionMedium};
        overflow: hidden;
    }

    .star {
        position: absolute;
        display: flex;
        align-items: center;
        right: 0;
        bottom: 0;
        height: 100%;
        box-sizing: border-box;
        background-color: ${(props) => props.theme.colors.gray2};
        padding: ${(props) => props.theme.margins.small + ' ' + props.theme.margins.medium};
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

    &.selected {
        background-color: ${(props) => props.theme.colors.primary2};
        outline: 1px solid ${(props) => props.theme.colors.black};

        .extension {
            background-color: ${(props) => props.theme.colors.primary2};
            outline: 1px solid ${(props) => props.theme.colors.black};
        }

        .preview {
            outline: 1px solid ${(props) => props.theme.colors.black};
        }

        .star {
            background-color: ${(props) => props.theme.colors.primary2};
        }
    }

    &.on-move::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: ${(props) => props.theme.colors.gray2};
        z-index: 100;
    }

    &.target {
        background-color: ${(props) => props.theme.colors.wrong4};
        outline: 1px solid ${(props) => props.theme.colors.black};
        cursor: not-allowed;

        .extension {
            background-color: ${(props) => props.theme.colors.wrong4};
            outline: 1px solid ${(props) => props.theme.colors.black};
            z-index: 10;
        }

        .preview {
            position: relative;
            outline: 1px solid ${(props) => props.theme.colors.black};

            &::after {
                position: absolute;
                content: '';
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: ${(props) => props.theme.colors.wrong4};
                opacity: .6;
            }
        }

        .star {
            background-color: ${(props) => props.theme.colors.wrong4};
        }
    }
`

export default StyledFile