import styled from 'styled-components'

const StyledTrashWarning = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${(props) => props.theme.margins.medium};
    /* margin: ${(props) => props.theme.margins.medium + ' 0 ' + props.theme.margins.big + ' 0'}; */
    padding: ${(props) => props.theme.margins.sectionMedium};
    background-color: ${(props) => props.theme.colors.warning6};
    border-radius: ${(props) => props.theme.borderRadiuses.big};
    font-weight: bold;
    pointer-events: all;

    .info-box {
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.margins.small};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.smallerMobile}) {
        .info-box {
            flex-direction: column;

            .icon {
                display: none;
            }
        }

        button {
            padding: ${(props) => props.theme.margins.sectionMedium};
        }

        .label {
            display: none;
        }
    }
`

export default StyledTrashWarning