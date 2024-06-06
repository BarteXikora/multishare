import styled from 'styled-components'

const StyledWindow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2500;
    background-color: transparent;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        background-color: ${(props) => props.theme.colors.white};
        border-radius: ${(props) => props.theme.borderRadiuses.big};
        padding: 0;
        min-width: 30vw;
        max-width: 65vw;
        pointer-events: all;
    }

    .bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${(props) => props.theme.margins.big};
        padding: 0;
        background-color: ${(props) => props.theme.colors.gray3};
        border-radius: ${(props) => props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big + ' 0 0'};

        h2 {
            margin: 0;
            padding: ${(props) => props.theme.margins.medium + ' ' + props.theme.margins.big};
            font-size: ${(props) => props.theme.fontSizes.subtitle};
            color: ${(props) => props.theme.colors.black};
            white-space: nowrap;
            overflow: hidden;
        }

        .close-button {
            border-radius: ${(props) => '0 ' + props.theme.borderRadiuses.big + ' 0 0'};
        }
    }

    .content {
        margin: ${(props) => props.theme.margins.sectionSmall};
        padding: ${(props) => props.theme.margins.sectionSmall};
        max-height: 80vh;
        overflow-y: auto;

        h2, h3 {
            font-size: ${(props) => props.theme.fontSizes.subtitle};
            margin: ${(props) => '0 0 ' + props.theme.margins.small + ' 0'};
        }

        p {
            font-size: ${(props) => props.theme.fontSizes.default};
            margin: 0
        }

        section {
            padding: ${(props) => props.theme.margins.medium + ' 0'};

            &:first-of-type {
                padding-top: ${(props) => props.theme.margins.small};
            }

            &:last-of-type {
                padding-bottom: ${(props) => props.theme.margins.small};
            }
        }

        .actions {
            display: flex;
            justify-content: end;
            gap: ${(props) => props.theme.margins.medium};
        }

        .error {
            color: ${(props) => props.theme.colors.wrong6};
        }

        .warning {
            color: ${(props) => props.theme.colors.warning6};
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        .container {
            min-width: 40vw;
            max-width: 75vw;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.tablet}) {
        .container {
            min-width: 65vw;
            max-width: 90vw;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        align-items: start;

        .container {
            min-width: 90vw;
            max-width: 90vw;
            margin-top: ${(props) => props.theme.margins.big};
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.smallerMobile}) {
        .container {
            min-width: 100%;
            max-width: 100%;
            height: 100%;
            margin-top: 0;
            border-radius: 0;
        } 

        .bar, .bar .close-button {
            border-radius: 0;
        }

        .content {
            box-sizing: border-box;
            max-height: calc(100vh - 60px);
            height: calc(100vh - 60px);
        }
    }
`

export default StyledWindow