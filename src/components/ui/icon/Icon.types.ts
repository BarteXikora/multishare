export type iconType = {
    $color?: 'light' | 'dark' | 'primary' | 'correct' | 'warning' | 'wrong'
    $size?: 'default' | 'big'
}

export type iconOutlineType = iconType & {
    $outline?: boolean
}