import styled from 'styled-components'

const StyledEmptyFolder = styled.div`
    display: inline-flex;
    align-items: center;
    gap: ${(props) => props.theme.margins.extraBig};
    background-color: ${(props) => props.theme.colors.gray2};
    padding: ${(props) => props.theme.margins.sectionBig};
    border-radius: ${(props) => props.theme.borderRadiuses.big};
    pointer-events: all;

    p {
        margin: ${(props) => `0 0 ${props.theme.margins.big} 0`}
    }

    .back-button {
        background-color: ${(props) => props.theme.colors.gray6};

        &:hover {
            background-color: ${(props) => props.theme.colors.black};
        }
    }

    .actions {
        display: flex;
        gap: ${(props) => props.theme.margins.medium};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.smallerMobile}) {
        flex-direction: column;
        gap: ${(props) => props.theme.margins.medium};
        text-align: center;
        
        .actions {
            justify-content: center;
        }
    }
`

export default StyledEmptyFolder