import styled from 'styled-components'

const StyledSearchInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${(props) => props.theme.margins.medium};
    margin: ${(props) => props.theme.margins.medium + ' 0 ' + props.theme.margins.big + ' 0'};
    padding: ${(props) => props.theme.margins.sectionMedium};
    background-color: ${(props) => props.theme.colors.primary2};
    border-radius: ${(props) => props.theme.borderRadiuses.big};
    pointer-events: all;

    .info-box {
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.margins.medium};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.smallerMobile}) {
        .icon, .label {
            display: none;
        }

        button {
            padding: ${(props) => props.theme.margins.sectionMedium};
        }
    }
`

export default StyledSearchInfo