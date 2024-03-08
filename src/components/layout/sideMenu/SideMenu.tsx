import { useSelector, useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/sideMenuSlice/sideMenuSlice'
import { useLocation } from 'react-router-dom'

import StyledSideMenu from './SideMenu.styles'
import ProjectsButtons from './projectsButtons/ProjectsButtons'
import ContentButtons from './contentButtons/ContentButtons'
import Button from '../../ui/button/Button'
import UsedSpace from '../../elements/usedSpace/UsedSpace'

import iconClose from '../../../assets/icons/icon-close.svg'
import logo from '../../../assets/images/img-logo.svg'
import iconAccount from '../../../assets/icons/icon-account.svg'
import iconManageProject from '../../../assets/icons/icon-manage-project.svg'

const SideMenu = () => {
    const isMenuShown = useSelector(state => state.sideMenu.isShown)
    const dispatch = useDispatch()

    const location = useLocation().pathname
    const isProjectSelected = useSelector(state => state.project.selectedProject !== null)

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
            {
                location === '/projects' ?
                    <ProjectsButtons />
                    :
                    <ContentButtons />
            }
        </section>

        <section className='used-space'>
            <UsedSpace />
        </section>

        <section>
            {
                isProjectSelected && <Button $variant='tertiary'>
                    <img src={iconManageProject} alt='Zarządzaj projektem' />

                    Zarządzaj projektem
                </Button>
            }

            <Button $variant='tertiary'>
                <img src={iconAccount} alt='Moje konto' />

                Moje konto
            </Button>
        </section>
    </StyledSideMenu>
}

export default SideMenu