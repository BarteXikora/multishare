import StyledHeader from './Header.styles'
import PathBox from '../../elements/pathBox/PathBox'
import ContentTools from '../../elements/contentTools/ContentTools'

const Header = () => {
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