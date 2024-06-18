import styled from 'styled-components'
import Button from '../../ui/button/Button'

const StyledFolder = styled(Button)`
    position: relative;
    pointer-events: all;

    div {
        display: flex;
        align-items: center;
    }

    .folder-name {
        gap: ${(props) => props.theme.margins.medium};
        overflow: hidden;
    }

    .star {
        position: absolute;
        right: 0;
        background-color: ${(props) => props.theme.colors.gray2};
        padding: ${(props) => props.theme.margins.small + ' ' + props.theme.margins.medium};
        transition: ${(props) => props.theme.transition};
    }

    &:hover .star {
        background-color: ${(props) => props.theme.colors.gray3};
    }

    &.selected {
        background-color: ${(props) => props.theme.colors.primary2};
        outline: 1px solid ${(props) => props.theme.colors.black};

        .star {
            background-color: ${(props) => props.theme.colors.primary2};
        }
    }

    &.on-move::after {
        position: absolute;
        content: '';
        background-color: ${(props) => props.theme.colors.gray2};
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    &.target {
        background-color: ${(props) => props.theme.colors.correct3};
        outline: 1px solid ${(props) => props.theme.colors.black};

        .star {
            background-color: ${(props) => props.theme.colors.correct3};
        }
    }
`

export default StyledFolder