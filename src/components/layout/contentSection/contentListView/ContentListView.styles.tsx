import styled from 'styled-components'

const StyledContentListView = styled.div`
    margin-top: ${(props) => props.theme.margins.big};
    margin-bottom: ${(props) => props.theme.margins.extraBig};
    pointer-events: none;

    .list-grid {
        padding: ${(props) => props.theme.margins.sectionSmall};
        align-items: center;
        display: grid;
        grid-template-columns: 4fr 1fr 2fr 3fr 2fr;

        div {
            display: flex;
            align-items: center;
        }
    }

    .list-header {
        background-color: ${(props) => props.theme.colors.gray6};
        color: ${(props) => props.theme.colors.white};
        font-size: ${(props) => props.theme.fontSizes.default};
        font-weight: bold;
        border-radius: ${(props) => props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big} 0 0;

        .icon-star {
            width: 20px;
        }
    }

    .list-element {
        background-color: ${(props) => props.theme.colors.gray2};
        transition: ${(props) => props.theme.transition};
        pointer-events: all;
        cursor: pointer;

        div {
            gap: ${(props) => props.theme.margins.medium};

            &:not(:first-of-type) {
                margin-left: ${(props) => props.theme.margins.medium};
            }
        }

        .icon-placeholder {
            width: 26px;
            height: 26px;
        }

        &.selected {
            background-color: ${(props) => props.theme.colors.primary2};

            &:nth-of-type(odd) {
                background-color: ${(props) => props.theme.colors.primary3};
            }

            &:hover {
                background-color: ${(props) => props.theme.colors.primary2} !important;

                &:nth-of-type(odd) {
                    background-color: ${(props) => props.theme.colors.primary3} !important;
                }
            }
        }

        &:hover {
            background-color: ${(props) => props.theme.colors.gray4} !important;
        }

        &:nth-of-type(odd) {
            background-color: ${(props) => props.theme.colors.gray3};
        }

        &:last-of-type {
            border-radius: 0 0 ${(props) => props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big};
        }
    }
`

export default StyledContentListView