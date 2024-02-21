import styled from 'styled-components'

const StyledContentTools = styled.div`
    display: flex;
    gap: ${(props) => props.theme.margins.small};
    background-color: ${(props) => props.theme.colors.white};
    padding-bottom: ${(props) => props.theme.margins.medium};

    button {
        white-space: nowrap;
    }

    section {
        display: flex;
        gap: ${(props) => props.theme.margins.small};
    }

    .tools-buttons {
        display: flex;
        gap: ${(props) => props.theme.margins.small};
    }

    .open-tools-buttons {
        display: none;
    }

    .list-tools {
        margin-left: auto;
    }

    .selected-tools {
        margin-left: auto;
        display: none;
    }

    .details-button {
        display: none;
    }

    &.selected-tools-shown {
        .list-tools {
            display: none;
        }

        .selected-tools {
            display: flex;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        .details-button {
            display: flex;
            margin-left: auto;
        }

        &.selected-tools-shown .general-tools {
            display: none;
        }

        .selected-tools {
            margin-left: 0;
            width: 100%;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        .general-tools .tools-buttons {
            display: none;
        }

        .open-tools-buttons {
            display: flex;
        }

        .list-tools {
            display: none;
        }
    }
`

export default StyledContentTools