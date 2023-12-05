import StyledSideMenu from './SideMenu.styles'
import Button from '../../ui/button/Button'
import UsedSpace from '../../elements/usedSpace/UsedSpace'

import logo from '../../../assets/images/img-logo.svg'
import iconFolder from '../../../assets/icons/icon-folder.svg'
import iconFiles from '../../../assets/icons/icon-files.svg'
import iconStar from '../../../assets/icons/icon-star.svg'
import iconTrash from '../../../assets/icons/icon-trash.svg'

const SideMenu = () => {
    return <StyledSideMenu>
        <section className='logo'>
            <Button variant='tertiary'>
                <img src={logo} alt="Logo multishare" />
            </Button>
        </section>

        <section className='nav-menu'>
            <h2>Menu:</h2>

            <Button variant='tertiary' active>
                <img src={iconFolder} alt='Dysk' />

                Dysk
            </Button>

            <Button variant='tertiary'>
                <img src={iconFiles} alt='Wszystkie pliki' />

                Wszystkie pliki
            </Button>

            <Button variant='tertiary'>
                <img src={iconStar} alt='Oznaczone gwiazdką' />

                Oznaczone gwiazdką
            </Button>

            <Button variant='tertiary'>
                <img src={iconTrash} alt='Kosz' />

                Kosz
            </Button>
        </section>

        <section>
            <UsedSpace />
        </section>
    </StyledSideMenu>
}

export default SideMenu