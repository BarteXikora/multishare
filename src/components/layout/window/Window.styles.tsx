import styled from 'styled-components'

const StyledWindow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2500;
    background-color: transparent;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        background-color: ${(props) => props.theme.colors.white};
        border-radius: ${(props) => props.theme.borderRadiuses.big};
        padding: 0;
        min-width: 30vw;
        max-width: 65vw;
        pointer-events: all;
    }

    .bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${(props) => props.theme.margins.big};
        padding: 0;
        background-color: ${(props) => props.theme.colors.gray3};
        border-radius: ${(props) => props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big + ' 0 0'};

        h2 {
            margin: 0;
            padding: ${(props) => props.theme.margins.sectionSmall};
            font-size: ${(props) => props.theme.fontSizes.subtitle};
            color: ${(props) => props.theme.colors.black};
        }

        .close-button {
            border-radius: ${(props) => '0 ' + props.theme.borderRadiuses.big + ' 0 0'};
        }
    }

    .content {
        padding: ${(props) => props.theme.margins.sectionMedium};
    }
`

export default StyledWindow