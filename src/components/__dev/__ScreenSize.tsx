import styled from 'styled-components'

const StyledScreenSize = styled.div`
    position: fixed;
    z-index: 10000;
    bottom: 3px;
    right: 3px;

    div {
        border: 1px solid black;
        padding: 3px 6px;
        font-size: 16px;
        font-weight: bold;
        color: white;
        background-color: black;
    }

    .desktop, .tablet, .mobile, .smaller {
        display: none;
    }

    .xl {
        background-color: red;
    }
    
    .desktop {
        background-color: orange;
    }

    .tablet {
        background-color: green;
    }

    .mobile {
        background-color: blue;
    }

    .smaller {
        background-color: purple;
    }

    @media only screen and (max-width: ${(props) => props.theme.screenBreakpoints.desktop}) {
        .xl {
            display: none;
        }

        .desktop {
            display: flex;
        }
    }

    @media only screen and (max-width: ${(props) => props.theme.screenBreakpoints.tablet}) {
        .desktop {
            display: none;
        }

        .tablet {
            display: flex;
        }
    }

    @media only screen and (max-width: ${(props) => props.theme.screenBreakpoints.mobile}) {
        .tablet {
            display: none;
        }

        .mobile {
            display: flex;
        }
    }

    @media only screen and (max-width: ${(props) => props.theme.screenBreakpoints.smallerMobile}) {
        .mobile {
            display: none;
        }

        .smaller {
            display: flex;
        }
    }
`

const ScreenSize = () => {
    return <StyledScreenSize>
        <div className="xl">X</div>

        <div className="desktop">D</div>

        <div className="tablet">T</div>

        <div className="mobile">M</div>

        <div className="smaller">S</div>
    </StyledScreenSize>
}

export default ScreenSize