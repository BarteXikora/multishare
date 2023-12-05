import StyledButton from './Button.styles'

export type ButtonProps = {
    $variant?: 'primary' | 'secondary' | 'tertiary'
    $size?: 'big' | 'small'
    $active?: boolean
}

export default StyledButton