import styled from 'styled-components'
import Dropdown from '../../../ui/dropdown/Dropdown'

const StyledCollapsedPathButton = styled(Dropdown)`
    display: none;

    &.path-collapsed {
        display: block;
    }

    .desktop, .mobile {
            white-space: nowrap;
            font-size: ${(props) => props.theme.fontSizes.subtitle};
            font-weight: bold;
    }

    .mobile {
        display: none;
    }

    .dropdown-content {
        flex-direction: column;
        gap: ${(props) => props.theme.margins.small};
        white-space: nowrap;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        display: block;

        .desktop {
            display: none;
        }

        .mobile {
            display: inline;
        }
    }
`

export default StyledCollapsedPathButton