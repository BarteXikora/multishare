import { ReactSVG } from 'react-svg'

import StyledIcon from './Icon.styles'
import { iconType } from './Icon.types'

const Icon = ({ iconSrc, iconArgs }: { iconSrc: string, iconArgs: iconType }) => {
    return <StyledIcon $color={iconArgs.$color} $size={iconArgs.$size} ><ReactSVG src={iconSrc} /></StyledIcon>
}

export { }