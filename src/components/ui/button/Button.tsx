import StyledButton from './Button.styles'

type ButtonSizes = 'big' | 'small'

type ButtonPrimary = {
    $variant?: 'primary'
    $size?: ButtonSizes
}

type ButtonSecondary = {
    $variant: 'secondary'
    $size?: ButtonSizes
}

type ButtonTertiary = {
    $variant: 'tertiary'
    $size?: ButtonSizes
    $active?: boolean
}

type ButtonQuaternary = {
    $variant: 'quaternary'
    $size?: ButtonSizes
    $active?: boolean
}

type ButtonWrong = {
    $variant: 'wrong'
    $size?: ButtonSizes
}

export type ButtonProps = ButtonPrimary | ButtonSecondary | ButtonTertiary | ButtonQuaternary | ButtonWrong

export default StyledButton