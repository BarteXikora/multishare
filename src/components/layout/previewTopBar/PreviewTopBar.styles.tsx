import styled from 'styled-components'

const StyledPreviewTopBar = styled.div`
    position: sticky;
    top: 0;
    padding: ${(props) => props.theme.margins.big} 0;
    background-color: ${(props) => props.theme.colors.white};

    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${(props) => props.theme.margins.medium};
        padding: ${(props) => props.theme.margins.sectionMedium};
        background-color: ${(props) => props.theme.colors.black};
        border-radius: ${(props) => props.theme.borderRadiuses.big};
        color: ${(props) => props.theme.colors.white};
    }

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

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        padding: ${(props) => props.theme.margins.medium} 0;

        .file-name-section {
            gap: ${(props) => props.theme.margins.small};
            
            h2 {
                font-size: ${(props) => props.theme.fontSizes.default};
            }
        }
    }
`

export default StyledPreviewTopBar