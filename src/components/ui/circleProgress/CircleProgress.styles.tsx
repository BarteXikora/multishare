import styled from 'styled-components'
import { CircleProgressType } from './CircleProgress'

const StyledCircleProgress = styled.div<CircleProgressType>`
    position: relative;
    background-color: ${(props) => props.theme.colors.gray6};
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin: 4px;
    padding: 6px;
    box-sizing: border-box;

    background: conic-gradient(
        ${(props) => props.theme.colors.correct6} ${(props) => props.$percent}%, 
        ${(props) => props.theme.colors.gray6} 0
    );

    transition: ${(props) => props.theme.transition};

    &::after {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${(props) => props.theme.colors.white};
    }
`

export default StyledCircleProgress