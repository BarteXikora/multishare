import styled from 'styled-components'

const StyledFilterWarning = styled.button`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.margins.medium};
    background-color: ${(props) => props.theme.colors.warning6};
    padding: 0 ${(props) => props.theme.margins.big};
    border-radius: ${(props) => '0 ' + props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big + ' 0'};
    border: none;
    cursor: pointer;

    img {
        width: 24px;
    }

    h3 {
        margin: 0;
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        font-weight: bold;
        white-space: nowrap;
    }

    .clear-filters {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.margins.medium};
        background-color: ${(props) => props.theme.colors.wrong6};
        padding: 0 ${(props) => props.theme.margins.big};
        border-radius: ${(props) => '0 ' + props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big + ' 0'};
        opacity: 0;
        transition: ${(props) => props.theme.transition};

        img {
            width: 36px;
        }

        h3 {
            color: ${(props) => props.theme.colors.white};
        }
    }

    &:hover .clear-filters {
        opacity: 1;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        position: absolute;
        padding: ${(props) => props.theme.margins.sectionSmall};
        height: auto;
        top: ${(props) => props.theme.margins.medium};
        right: 70px;
        border-radius: ${(props) => props.theme.borderRadiuses.small};

        img {
            width: 16px;
        }

        h3 {
            display: none;
        }

        &:hover .clear-filters {
            opacity: 0;
        }
    }
`

export default StyledFilterWarning