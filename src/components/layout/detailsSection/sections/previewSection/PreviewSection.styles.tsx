import styled from 'styled-components'

const StyledPreviewSection = styled.div`
    width: 100%;
    min-height: 130px;
    aspect-ratio: 2/1;
    background-color: ${(props) => props.theme.colors.black};
    border-radius: ${(props) => props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big} 0 0;
    flex-shrink: 0;

    .animated-div {
        width: 100%;
        height: 100%;
    }

    .icon-section {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        .icon {
            position: relative;
        }

        .icon-img {
            height: 50%;
        }
    }

    .image-section {
        position: relative;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: ${(props) => props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big} 0 0;
    }

    .star {
        position: absolute;

        &.icon-star {
            bottom: -6px;
            right: -6px;
        }

        &.image-star {
            bottom: 0;
            right: 0;
            background-color: ${(props) => props.theme.colors.black};
            padding: ${(props) => props.theme.margins.sectionSmall};
            border-radius: ${(props) => props.theme.borderRadiuses.big} 0 0 0;
        }
    }
`

export default StyledPreviewSection