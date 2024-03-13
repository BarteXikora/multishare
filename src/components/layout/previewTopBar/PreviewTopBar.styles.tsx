import styled from 'styled-components'

const StyledPreviewTopBar = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${(props) => props.theme.margins.medium};
    padding: ${(props) => props.theme.margins.sectionMedium};
    background-color: ${(props) => props.theme.colors.black};
    border-radius: ${(props) => props.theme.borderRadiuses.big};
    color: ${(props) => props.theme.colors.white};

    div {
        display: flex;
        align-items: center;
    }

    .file-name-section {
        gap: ${(props) => props.theme.margins.medium};
        overflow: hidden;

        h2 {
            margin: 0;
            white-space: nowrap;
        }

        .extension {
            color: ${(props) => props.theme.colors.gray4};
        }
    }

    .details-button {
        display: none;
    }

    .tools-buttons {
        gap: ${(props) => props.theme.margins.medium};
        flex-shrink: 0;
        white-space: nowrap;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        .tools-buttons {
            gap: ${(props) => props.theme.margins.small};

            .label {
                display: none;
            }
        }
    }
`

export default StyledPreviewTopBar