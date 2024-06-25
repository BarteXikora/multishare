import { ReactSVG } from 'react-svg'

import StyledIcon from './Icon.styles'
import { iconType, iconOutlineType } from './Icon.types'

export const Icon = ({ iconSrc, iconArgs }: { iconSrc: string, iconArgs: iconType }) => {
    return <StyledIcon $color={iconArgs.$color} $size={iconArgs.$size}><ReactSVG src={iconSrc} /></StyledIcon>
}

export const IconOutline = ({ iconSrc, iconArgs }: { iconSrc: string, iconArgs: iconType }) => {
    return <StyledIcon $color={iconArgs.$color} $size={iconArgs.$size} $outline><ReactSVG src={iconSrc} /></StyledIcon>
}

export const IconOptionOutline = ({ iconSrc, iconArgs }: { iconSrc: string, iconArgs: iconOutlineType }) => {
    return <StyledIcon $color={iconArgs.$color} $size={iconArgs.$size} $outline={iconArgs.$outline}><ReactSVG src={iconSrc} /></StyledIcon>
}