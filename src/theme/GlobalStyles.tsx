/** 
 * Global app styles:
**/

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        font-family: 'DM Sans', sans-serif;
        font-size: ${(props) => props.theme.fontSizes.default};
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.black};
    }
`

export default GlobalStyle