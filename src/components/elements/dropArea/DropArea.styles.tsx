import styled from 'styled-components'

const StyledDropArea = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    .file-input {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        height: 100%;
        gap: ${(props) => props.theme.margins.medium};
        text-align: center;
        padding: ${(props) => props.theme.margins.sectionMedium};
        margin: ${(props) => props.theme.margins.big};
        margin-bottom: ${(props) => props.theme.margins.extraBig};
        font-size: ${(props) => props.theme.fontSizes.subtitle};

        img {
            align-self: center;
        }
    }

    .empty-drop {
        border: 2px dashed transparent;
        border-radius: ${(props) => props.theme.borderRadiuses.small};

        .section-image img {
            width: 200px;
        }
        
        .img-color {
            display: none;
        }

        h3 {
            color: ${(props) => props.theme.colors.gray4};
            font-size: ${(props) => props.theme.fontSizes.subtitle};
            font-weight: bold;
            margin: 0;
        }

        &.file-input-drag {
            border-color: ${(props) => props.theme.colors.primary6};
            color: ${(props) => props.theme.colors.primary6};

            .img {
                display: none;
            }

            .img-color {
                display: inline;
            }
        }

        .actions {
            z-index: 1000;
            display: flex;
            justify-content: center !important;
            margin-top: ${(props) => props.theme.margins.medium};
        }
    }

    .selected-files {
        z-index: 1000;

        .section-img {
            width: 150px;
        }

        .heading {
            color: ${(props) => props.theme.colors.primary6};
            font-size: ${(props) => props.theme.fontSizes.subtitle};
            font-weight: bold;
            margin: 0;
            margin-bottom: ${(props) => props.theme.margins.small};
        }

        .warning {
            height: 18px;
            font-size: ${(props) => props.theme.fontSizes.default};
            color: ${(props) => props.theme.colors.wrong6};
            font-weight: bold;
        }

        .actions {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: ${(props) => props.theme.margins.small};
        }
    }

    .heading-mobile{
        display: none;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        .section-img {
            display: none;
        }

        .section-image, .heading {
            display: none;
        }

        .heading-mobile{
            display: inline;
        }

        .content {
            height: auto !important;
        }

        .selected-files {
            margin: 0;
        }

        .file-input {
            position: relative;
            width: 100%;
            height: auto;
            opacity: 0;
        }

        .actions {
            display: flex;
            bottom: 0;
            gap: ${(props) => props.theme.margins.small};

            button {
                width: 100%;
            }
        }
    }
`

export default StyledDropArea