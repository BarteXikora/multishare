import StyledButton from './Button.styles'

export type ButtonProps = {
    $variant?: 'primary' | 'secondary' | 'tertiary' | 'wrong'
    $size?: 'big' | 'small'
    $active?: boolean
}

export default StyledButton