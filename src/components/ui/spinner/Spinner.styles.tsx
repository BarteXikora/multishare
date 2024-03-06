import styled from 'styled-components'

const StyledSpinner = styled.div`
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;

    .spinner-element {
        background-color: ${(props) => props.theme.colors.gray3};
        width: 16px;
        height: 16px;
        border-radius: 4px;

        animation: spinner;
        animation-duration: 2s;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        &:nth-last-of-type(2) {
            animation-delay: .5s;
        }

        &:nth-last-of-type(4) {
            animation-delay: 1s;
        }

        &:nth-last-of-type(3) {
            animation-delay: 1.5s;
        }
    }

    @keyframes spinner {
        0% {
            background-color: ${(props) => props.theme.colors.gray3};
        }

        10%, 25% {
            background-color: ${(props) => props.theme.colors.primary6};
        }

        45% {
            background-color: ${(props) => props.theme.colors.gray3};
        }
    }
`

export default StyledSpinner