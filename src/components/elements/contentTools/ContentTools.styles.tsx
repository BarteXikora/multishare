import styled from 'styled-components'

const StyledContentTools = styled.div`
    display: flex;
    /* justify-content: space-between; */
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

    .general-tools {
        margin-right: auto;
    }

    .details-button {
        display: none;
    }

    .list-tools {
        display: flex;
    }

    .selected-tools {
        display: none;
    }

    &.selected-tools-shown {
        .list-tools .tools-buttons {
            display: none;
        }

        .selected-tools {
            display: flex;
        }
    }

    .tools-buttons {
        display: flex;
        gap: ${(props) => props.theme.margins.small};
    }

    .open-tools-buttons {
        display: none;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        .details-button {
            display: flex;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        .tools-buttons {
            display: none;
        }

        .open-tools-buttons {
            display: flex;
        }
    }
`

export default StyledContentTools