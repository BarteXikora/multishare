import styled, { css } from 'styled-components'
import { ButtonProps } from './Button'

const buttonPrimaryStyles = css`
    background-color: ${(props) => props.theme.colors.primary6};
    color: ${(props) => props.theme.colors.white};

    &:hover {
        background-color: ${(props) => props.theme.colors.primary5};
    }
`

const buttonSecondaryStyles = css`
    background-color: ${(props) => props.theme.colors.gray2};
    color: ${(props) => props.theme.colors.black};

    &:hover {
        background-color: ${(props) => props.theme.colors.gray3};
    }
`

const buttonTertiaryStyles = css`
    background-color: transparent;
    color: ${(props) => props.theme.colors.white};

    &:hover {
        background-color: ${(props) => props.theme.colors.gray6};
    }
`

const buttonTertiaryActiveStyles = css`
    background-color: ${(props) => props.theme.colors.gray6};
    color: ${(props) => props.theme.colors.white};
    cursor: default;
`

const buttonQuaternaryStyles = css`
    background-color: transparent;
    color: ${(props) => props.theme.colors.black};

    &:hover {
        background-color: ${(props) => props.theme.colors.gray2};
    }
`

const buttonQuaternaryActiveStyles = css`
    background-color: ${(props) => props.theme.colors.primary2};
    color: ${(props) => props.theme.colors.black};

    &:hover {
        background-color: ${(props) => props.theme.colors.primary2};
    }
`

const buttonWarningStyles = css`
    background-color: ${(props) => props.theme.colors.warning6};
    color: ${(props) => props.theme.colors.black};

    &:hover {
        background-color: ${(props) => props.theme.colors.warning5};
    }
`

const buttonWrongStyles = css`
    background-color: ${(props) => props.theme.colors.wrong6};
    color: ${(props) => props.theme.colors.white};

    &:hover {
        background-color: ${(props) => props.theme.colors.wrong5};
    }
`

const buttonBigStyles = css`
    padding: ${(props) => props.theme.margins.sectionMedium}; 
    border-radius: ${(props) => props.theme.borderRadiuses.big};

    &::before {
        border-radius: ${(props) => props.theme.borderRadiuses.big};
    }
`

const buttonSmallStyles = css`
    padding: ${(props) => props.theme.margins.sectionSmall}; 
    border-radius: ${(props) => props.theme.borderRadiuses.small};
`

const buttonDisabled = css`
    position: relative;
    background-color: ${(props) => props.theme.colors.gray3};
    color: ${(props) => props.theme.colors.gray6};
    cursor: default !important;

    &::before {
        position: absolute;
        content: '';
        background-color: ${(props) => props.theme.colors.gray3};
        opacity: .5;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: ${(props) => props.theme.borderRadiuses.small};
    }

    &:hover {
        background-color: ${(props) => props.theme.colors.gray3};
    }
`

const StyledButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.margins.medium};
    border: none;
    transition: ${(props) => props.theme.transition};
    cursor: pointer;

    ${(props) => props.$size === 'big' ?
        buttonBigStyles
        :
        buttonSmallStyles
    };

    ${(props) => (!props.$variant || props.$variant === 'primary') && buttonPrimaryStyles}
    ${(props) => props.$variant === 'secondary' && buttonSecondaryStyles}
    ${(props) => props.$variant === 'tertiary' && (props.$active ? buttonTertiaryActiveStyles : buttonTertiaryStyles)}
    ${(props) => props.$variant === 'quaternary' && (props.$active ? buttonQuaternaryActiveStyles : buttonQuaternaryStyles)}
    ${(props) => props.$variant === 'warning' && buttonWarningStyles}
    ${(props) => props.$variant === 'wrong' && buttonWrongStyles}
    ${(props) => props.disabled && buttonDisabled}
`

export default StyledButton