/** 
 * Header
 * 
 * Rendered in the AppPage, displays PathBox and ContentTools components. 
**/

import StyledHeader from './Header.styles'
import PathBox from '../../elements/pathBox/PathBox'
import ContentTools from '../../elements/contentTools/ContentTools'

const Header = () => {

    // Rendering the component:
    return <StyledHeader>
        <section className='path-box'>
            <PathBox />
        </section>

        <section className='content-tools'>
            <ContentTools />
        </section>
    </StyledHeader>
}

export default Header