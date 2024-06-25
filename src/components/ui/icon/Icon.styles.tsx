import styled, { css } from 'styled-components'
import { iconType } from './Icon.types'

const iconDefault = css`
    width: 26px;
    height: 26px;
`

const iconBig = css`
    width: 38px;
    height: 38px;
`

const StyledIcon = styled.figure<iconType>`
    display: flex;
    margin: 0;

    ${(props) => props.$size === 'big' ? iconBig : iconDefault}

    svg {
        fill: ${(props) => props.theme.colors.white} !important;
        
        ${(props) => props.$color === 'dark' && `fill: ${props.theme.colors.black} !important;`}
        ${(props) => props.$color === 'primary' && `fill: ${props.theme.colors.primary6} !important;`}
        ${(props) => props.$color === 'wrong' && `fill: ${props.theme.colors.wrong6} !important;`}

        ${(props) => props.$size === 'big' ? iconBig : iconDefault}
    }
`

export default StyledIcon