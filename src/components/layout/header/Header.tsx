import StyledHeader from './Header.styles'
import PathBox from '../../elements/pathBox/PathBox'

const Header = () => {
    return <StyledHeader>
        <section className='path-box'>
            <PathBox />
        </section>
    </StyledHeader>
}

export default Header