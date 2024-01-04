import { useSelector, useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/sideMenuSlice/sideMenuSlice'

import StyledSideMenu from './SideMenu.styles'
import Button from '../../ui/button/Button'
import UsedSpace from '../../elements/usedSpace/UsedSpace'

import iconClose from '../../../assets/icons/icon-close.svg'
import logo from '../../../assets/images/img-logo.svg'
import iconFolder from '../../../assets/icons/icon-folder.svg'
import iconFiles from '../../../assets/icons/icon-files.svg'
import iconStar from '../../../assets/icons/icon-star.svg'
import iconTrash from '../../../assets/icons/icon-trash.svg'
import iconAccount from '../../../assets/icons/icon-account.svg'

const SideMenu = () => {
    const isMenuShown = useSelector(state => state.sideMenu.isShown)
    const dispatch = useDispatch()

    return <StyledSideMenu className={`${isMenuShown ? 'shown' : ''}`}>

        <Button className='close-button' $variant='wrong' $size='big' onClick={() => dispatch(toggle(false))}>
            <img src={iconClose} alt='Zamknij menu' />
        </Button>

        <section className='logo'>
            <Button $variant='tertiary'>
                <img src={logo} alt="Logo multishare" />
            </Button>
        </section>

        <section className='nav-menu'>
            <Button $variant='tertiary' $active>
                <img src={iconFolder} alt='Dysk' />

                Dysk
            </Button>

            <Button $variant='tertiary'>
                <img src={iconFiles} alt='Wszystkie pliki' />

                Wszystkie pliki
            </Button>

            <Button $variant='tertiary'>
                <img src={iconStar} alt='Oznaczone gwiazdką' />

                Oznaczone gwiazdką
            </Button>

            <Button $variant='tertiary'>
                <img src={iconTrash} alt='Kosz' />

                Kosz
            </Button>
        </section>

        <section className='used-space'>
            <UsedSpace />
        </section>

        <section>
            <Button $variant='tertiary'>
                <img src={iconAccount} alt='Moje konto' />

                Moje konto
            </Button>
        </section>
    </StyledSideMenu>
}

export default SideMenu