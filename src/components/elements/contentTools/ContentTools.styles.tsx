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

    .animated-div {
        width: 100%;
        display: flex;
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

    .button-dropdown .dropdown-content {
        right: 0;
        flex-direction: column;
        padding: ${(props) => props.theme.margins.sectionMedium};

        h2 {
            font-size: ${(props) => props.theme.fontSizes.subtitle};
            padding: ${(props) => props.theme.margins.sectionMedium};
            padding-right: ${(props) => props.theme.margins.big};
            white-space: nowrap;
            margin: 0;
        }

        button {
            font-weight: bold;
        }
    }

    .dropdown-content {
        section {
            display: flex;
            flex-direction: column;
            gap: 0;

            &:first-of-type {
                gap: ${(props) => props.theme.margins.small};
            }
        }

        hr {
            width: 100%;
            margin: ${(props) => props.theme.margins.medium} 0;
        }
    }

    .dropdown-scroll {
        max-height: 118px;
        overflow-y: auto;
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
        position: absolute;
        top: 0;
        right: 0;
        margin-top: ${(props) => props.theme.margins.small};
        box-sizing: border-box;
        background-color: ${(props) => props.theme.colors.black};
        border-radius: ${(props) => props.theme.borderRadiuses.big};
        padding: ${(props) => props.theme.margins.small};

        &.selected-tools-shown {
            width: 100%;
            padding: ${(props) => props.theme.margins.small + ' ' + props.theme.margins.medium};

            button {
                padding: ${(props) => props.theme.margins.small};
            }
        }

        .general-tools {
            margin-left: auto;

            .tools-buttons {
                display: none;
            }
        }

        .open-tools-buttons {
            display: flex;

            .dropdown-content {
                top: 30px;
                right: 0;
                flex-direction: column;
                gap: ${(props) => props.theme.margins.small}
            }
        }

        .list-tools {
            display: none;
        }

        .selected-tools .label {
            display: none;
        }
    }
`

export default StyledContentTools