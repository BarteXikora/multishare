import styled, { css } from 'styled-components'
import { iconOutlineType } from './Icon.types'

const iconDefault = css`
    width: 26px;
    max-width: 26px;
    height: 26px;
`

const iconBig = css`
    width: 38px;
    max-width: 38px;
    height: 38px;
`

const StyledIcon = styled.figure<iconOutlineType>`
    display: flex;
    margin: 0;

    ${(props) => props.$size === 'big' ? iconBig : iconDefault}

    div {
        ${(props) => props.$size === 'big' ? iconBig : iconDefault}
    }

    svg {
        ${(props) => !props.$outline ? `
            fill: ${props.theme.colors.white} !important;

            ${props.$color === 'dark' ? `fill: ${props.theme.colors.black} !important;` : ''}
            ${props.$color === 'primary' ? `fill: ${props.theme.colors.primary6} !important;` : ''}
            ${props.$color === 'correct' ? `fill: ${props.theme.colors.correct6} !important;` : ''}
            ${props.$color === 'warning' ? `fill: ${props.theme.colors.warning6} !important;` : ''}
            ${props.$color === 'wrong' ? `fill: ${props.theme.colors.wrong6} !important;` : ''}
        ` : ''}

        ${(props) => props.$outline ? `
            stroke: ${props.theme.colors.white} !important;

            ${props.$color === 'dark' ? `stroke: ${props.theme.colors.black} !important;` : ''}
            ${props.$color === 'primary' ? `stroke: ${props.theme.colors.primary6} !important;` : ''}
            ${props.$color === 'correct' ? `stroke: ${props.theme.colors.correct6} !important;` : ''}
            ${props.$color === 'warning' ? `stroke: ${props.theme.colors.warning6} !important;` : ''}
            ${props.$color === 'wrong' ? `stroke: ${props.theme.colors.wrong6} !important;` : ''}
        ` : ''}

        ${(props) => props.$size === 'big' ? iconBig : iconDefault}
    }
`

export default StyledIcon