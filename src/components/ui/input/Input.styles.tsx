import styled from 'styled-components'

const StyledInput = styled.input.attrs({ type: 'text' })`
    box-sizing: border-box;
    border: none;
    border-radius: ${(props) => props.theme.borderRadiuses.big};
    background-color: ${(props) => props.theme.colors.gray2};
    padding: ${(props) => props.theme.margins.sectionSmall};
    transition: ${(props) => props.theme.transition};

    &::placeholder {
        color: ${(props) => props.theme.colors.gray4};
        transition: ${(props) => props.theme.transition};
    }

    &:hover {
        background-color: ${(props) => props.theme.colors.gray3};

        &::placeholder {
            color: ${(props) => props.theme.colors.gray5};
        }
    }

    &:focus {
        outline: none;
        background-color: ${(props) => props.theme.colors.primary2};

        &::placeholder {
            color: ${(props) => props.theme.colors.primary5};
        }
    }
`

export default StyledInput