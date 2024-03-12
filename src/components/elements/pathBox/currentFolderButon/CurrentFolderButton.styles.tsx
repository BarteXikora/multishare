import styled from 'styled-components'
import Dropdown from '../../../ui/dropdown/Dropdown'

const StyledCurrentFolderButton = styled(Dropdown)`
    display: none;
    white-space: nowrap;
    max-width: 100%;

    .path-button-not-found  {
        color: ${(props) => props.theme.colors.wrong6};
        font-weight: bold !important;
    }

    button {
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        font-weight: bold;
        max-width: 100%;
        overflow: hidden;
    }

    .dropdown-content {
        flex-direction: column;
        gap: ${(props) => props.theme.margins.small};
        white-space: nowrap;

        button {
            font-size: ${(props) => props.theme.fontSizes.default};
            font-weight: normal;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        display: block;

        button {
            padding: ${(props) => props.theme.margins.small};
        }

        .dropdown-content button {
            padding: ${(props) => props.theme.margins.sectionSmall};
        }
    }
`

export default StyledCurrentFolderButton