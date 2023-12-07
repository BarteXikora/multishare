import styled from 'styled-components'
import Button from '../../ui/button/Button'

const StyledFolder = styled(Button)`
    position: relative;

    div {
        display: flex;
        align-items: center;
    }

    .folder-name {
        gap: ${(props) => props.theme.margins.medium};
    }

    .folder-options {
        position: absolute;
        right: 0;
    }

    .star {
        background-color: ${(props) => props.theme.colors.gray2};
        padding: ${(props) => props.theme.margins.small};
        padding-right: 0;
        transition: ${(props) => props.theme.transition};
    }

    button {
        background-color: ${(props) => props.theme.colors.gray2};
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;

        &:hover {
            background-color: ${(props) => props.theme.colors.primary3} !important;
        }
    }

    &:hover button {
        background-color: ${(props) => props.theme.colors.gray3};
    }

    &:hover .star {
        background-color: ${(props) => props.theme.colors.gray3};
    }
`

export default StyledFolder