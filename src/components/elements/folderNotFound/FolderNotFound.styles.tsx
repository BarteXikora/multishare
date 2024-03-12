import styled from 'styled-components'

const StyledFolderNotFound = styled.div`
    display: inline-flex;
    align-items: center;
    gap: ${(props) => props.theme.margins.extraBig};
    background-color: ${(props) => props.theme.colors.gray2};
    padding: ${(props) => props.theme.margins.sectionBig};
    border-radius: ${(props) => props.theme.borderRadiuses.big};
    pointer-events: all;

    h2 {
        margin: 0;
        color: ${(props) => props.theme.colors.wrong6};
    }

    p {
        margin: 0;
    }

    .back-button {
        margin-top: ${(props) => props.theme.margins.big};
        background-color: ${(props) => props.theme.colors.gray6};
        color: ${(props) => props.theme.colors.white};

        &:hover {
            background-color: ${(props) => props.theme.colors.black};
        }
    }
`

export default StyledFolderNotFound