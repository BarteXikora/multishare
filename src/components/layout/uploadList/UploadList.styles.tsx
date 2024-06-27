import styled from 'styled-components'

const StyledUploadList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${(props) => props.theme.colors.gray3};
    border-radius: ${(props) => props.theme.borderRadiuses.big};
    box-sizing: border-box;

    .bar {
        display: flex;
        justify-content: space-between;
        background-color: ${(props) => props.theme.colors.black};
        color: ${(props) => props.theme.colors.white};
        border-radius: ${(props) => props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big + ' 0 0'};

        h2 {
            display: flex;
            align-items: center;
            gap: ${(props) => props.theme.margins.medium};
            padding: ${(props) => props.theme.margins.sectionMedium};
            font-size: ${(props) => props.theme.fontSizes.subtitle};
            margin: 0;
        }

        button {
            border-radius: ${(props) => props.theme.borderRadiuses.big};
        }
    }

    .main {
        overflow-y: auto;
        max-height: 150px;
        scrollbar-width: none;
        border-radius: ${(props) => '0 0 ' + props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big};

        .file {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: ${(props) => props.theme.margins.sectionSmall};
            font-weight: bold;

            &:nth-of-type(even) {
                background-color: ${(props) => props.theme.colors.gray2};

                .status div::after {
                    background-color: ${(props) => props.theme.colors.gray2};
                }
            }

            .file-name {
                white-space: nowrap;
                overflow: hidden;
            }

            .extension {
                color: ${(props) => props.theme.colors.gray5};
            }

            .status {
                padding: 0 ${(props) => props.theme.margins.small};

                div {
                    display: inline-block;

                    &::after {
                        background-color: ${(props) => props.theme.colors.gray3};
                    }
                }
            }
        }
    }

    &.collapsed {
        .bar {
            border-radius: ${(props) => props.theme.borderRadiuses.big};

            button svg {
                transform: rotateZ(180deg);
            }
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        position: fixed;
        bottom: ${(props) => props.theme.margins.big};
        right: ${(props) => props.theme.margins.extraBig};
        width: 350px;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        bottom: ${(props) => props.theme.margins.small};
        right: ${(props) => props.theme.margins.medium};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.smallerMobile}) {
        bottom: 0;
        right: 0;
        width: 100%;
    }
`

export default StyledUploadList