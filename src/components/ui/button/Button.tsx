import StyledButton from './Button.styles'

type ButtonSizes = 'big' | 'small'

type ButtonPrimary = {
    $variant?: 'primary'
}

type ButtonSecondary = {
    $variant: 'secondary'
}

type ButtonTertiary = {
    $variant: 'tertiary'
    $active?: boolean
}

type ButtonQuaternary = {
    $variant: 'quaternary'
    $active?: boolean
}

type ButtonWarning = {
    $variant: 'warning'
}

type ButtonWrong = {
    $variant: 'wrong'
}

export type ButtonProps = (ButtonPrimary | ButtonSecondary | ButtonTertiary | ButtonQuaternary | ButtonWarning | ButtonWrong) & {
    $size?: ButtonSizes
    disabled?: boolean
}

export default StyledButton