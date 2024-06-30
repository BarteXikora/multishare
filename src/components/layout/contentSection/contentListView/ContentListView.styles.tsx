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
            white-space: nowrap;
            overflow: hidden;
        }
    }

    .list-header {
        background-color: ${(props) => props.theme.colors.gray6};
        color: ${(props) => props.theme.colors.white};
        font-size: ${(props) => props.theme.fontSizes.default};
        font-weight: bold;
        border-radius: ${(props) => props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big} 0 0;

        div {
            position: relative;

            &:not(:first-of-type) {
                padding-left: ${(props) => props.theme.margins.medium};
            }

            &:not(:last-of-type)::after {
                content: '';
                position: absolute;
                display: flex;
                height: 20px;
                width: 0;
                right: 0;
                border-right: 2px solid ${(props) => props.theme.colors.gray4};
            }
        }

        .icon-star {
            width: 20px;
        }
    }

    .list-element {
        background-color: ${(props) => props.theme.colors.gray2};
        transition: ${(props) => props.theme.transition};
        pointer-events: all;
        width: 100%;
        cursor: pointer;
        border: none;
        outline: none;

        div {
            gap: ${(props) => props.theme.margins.medium};

            &:not(:first-of-type) {
                margin-left: ${(props) => props.theme.margins.medium};
            }
        }

        .icon-placeholder {
            height: 26px;

            &.offset {
                width: 26px;
            }
        }

        &.selected {
            background-color: ${(props) => props.theme.colors.primary3} !important;

            &:nth-of-type(odd) {
                background-color: ${(props) => props.theme.colors.primary2} !important;
            }

            &:hover {
                background-color: ${(props) => props.theme.colors.primary5} !important;

                &:nth-of-type(odd) {
                    background-color: ${(props) => props.theme.colors.primary4} !important;
                }
            }
        }

        &:hover {
            background-color: ${(props) => props.theme.colors.gray4} !important;
        }

        &:nth-of-type(even) {
            background-color: ${(props) => props.theme.colors.gray3};
        }

        &:last-of-type {
            border-radius: 0 0 ${(props) => props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big};
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        .list-grid {
            grid-template-columns: 4fr 1fr 3fr 3fr 1fr;
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        .list-grid {
            grid-template-columns: 4fr 1fr 3fr 2fr;

            .date-column {
                display: none;
            }
        }
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.smallerMobile}) {
        .list-grid {
            grid-template-columns: 5fr 1fr;

            .star-column::after {
                display: none !important;
            }

            .type-column, .size-column {
                display: none;
            }
        }
    }
`

export default StyledContentListView