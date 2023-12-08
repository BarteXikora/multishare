import styled from 'styled-components'

const StyledSeachInput = styled.form`
    display: flex;
    width: 100%;

    input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        width: 100%;
    }

    .search-button {
        border-radius: ${(props) => props.theme.borderRadiuses.big};
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;

        &:hover {
            background-color: ${(props) => props.theme.colors.primary3};
        }
    }

    .open-search-button {
        display: none;
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.smallerMobile}) {
        width: auto;

        input, .search-button {
            display: none;
        }

        .open-search-button {
            display: flex;
        }
    }
`

export default StyledSeachInput