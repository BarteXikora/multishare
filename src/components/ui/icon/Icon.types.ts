export type iconType = {
    $color?: 'light' | 'dark' | 'primary' | 'wrong'
    $size?: 'default' | 'big'
}

export type iconOutlineType = iconType & {
    $outline?: boolean
}