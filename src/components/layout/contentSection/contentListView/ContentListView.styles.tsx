import styled from 'styled-components'

const StyledContentListView = styled.div`
    margin-top: ${(props) => props.theme.margins.big};
    margin-bottom: ${(props) => props.theme.margins.extraBig};
    pointer-events: none;

    .list-grid {
        display: grid;
        grid-template-columns: 4fr 1fr 2fr 3fr 2fr;
    }

    .list-header {
        padding: ${(props) => props.theme.margins.sectionSmall};
        align-items: center;
        background-color: ${(props) => props.theme.colors.gray6};
        color: ${(props) => props.theme.colors.white};
        font-size: ${(props) => props.theme.fontSizes.default};
        font-weight: bold;
        border-radius: ${(props) => props.theme.borderRadiuses.big + ' ' + props.theme.borderRadiuses.big} 0 0;

        div {
            display: flex;
            align-items: center;
        }

        .icon-star {
            width: 20px;
        }
    }
`

export default StyledContentListView