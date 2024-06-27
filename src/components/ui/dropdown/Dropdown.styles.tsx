import styled from 'styled-components'

const StyledDropdown = styled.div`
    position: relative;
    
    .dropdown-content {
        position: absolute;
        display: flex;
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.black};
        padding: ${(props) => props.theme.margins.sectionSmall};
        margin-top: ${(props) => props.theme.margins.small};
        box-sizing: border-box;
        min-width: 100%;
        border-radius: ${(props) => props.theme.borderRadiuses.small};
        border: 2px solid ${(props) => props.theme.colors.black};
        box-shadow: 6px 6px 18px 0 ${(props) => props.theme.colors.black};
    }

    .icon-arrow {
        transition: ${(props) => props.theme.transition};
    }

    &.dropdown-open .icon-arrow {
        transform: scaleY(-1);
    } 
`

export default StyledDropdown