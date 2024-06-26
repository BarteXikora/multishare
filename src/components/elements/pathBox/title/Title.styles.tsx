import styled from 'styled-components'

const StyledTitle = styled.div`
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.margins.small};

    figure {
        padding: ${(props) => props.theme.margins.sectionSmall}; 
    }

    h2 {
        margin: 0;
        font-size: ${(props) => props.theme.fontSizes.subtitle};
        font-weight: bold;
        padding: ${(props) => props.theme.margins.sectionSmall};
    }

    @media (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        gap: 0;

        figure, h2 {
            padding: ${(props) => props.theme.margins.small}
        }
    }
`

export default StyledTitle