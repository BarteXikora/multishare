import { ReactSVG } from 'react-svg'

import StyledIcon from './Icon.styles'
import { iconType, iconOutlineType } from './Icon.types'

export const Icon = ({ iconSrc, iconArgs }: { iconSrc: string, iconArgs: iconType }) => {
    return <StyledIcon $color={iconArgs.$color} $size={iconArgs.$size}>
        <ReactSVG
            src={iconSrc}
            beforeInjection={(svg) => {
                svg.setAttribute('viewBox', iconArgs.$size === 'big' ? '0 0 26 26' : '0 0 26 26')
                svg.setAttribute('width', iconArgs.$size === 'big' ? '38px' : '26px')
                svg.setAttribute('height', iconArgs.$size === 'big' ? '38px' : '26px')
            }}
        />
    </StyledIcon>
}

export const IconOutline = ({ iconSrc, iconArgs }: { iconSrc: string, iconArgs: iconType }) => {
    return <StyledIcon $color={iconArgs.$color} $size={iconArgs.$size} $outline><ReactSVG src={iconSrc} /></StyledIcon>
}

export const IconOptionOutline = ({ iconSrc, iconOutlineSrc, iconArgs }: { iconSrc: string, iconOutlineSrc: string, iconArgs: iconOutlineType }) => {
    return <StyledIcon $color={iconArgs.$color} $size={iconArgs.$size} $outline={iconArgs.$outline}>
        <ReactSVG src={iconArgs.$outline ? iconOutlineSrc : iconSrc} />
    </StyledIcon>
}