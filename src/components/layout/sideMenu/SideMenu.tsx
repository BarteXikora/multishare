/** 
 * Side menu
 * 
 * It is the main navigation menu in the application. It displays logo, used projects disk space and 
 * navigation buttons based on displayed app page. It also has a close menu button for mobile screens.
**/

import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/sideMenuSlice/sideMenuSlice'
import { useNavigate, useLocation } from 'react-router-dom'
import useScreenSize from '../../../hooks/useScreenSize/useScreenSize'
import { setFilter, setSearch, setSelected, setTreeLocation } from '../../../store/features/contentSlice/contentSlice'
import { showWindow } from '../../../store/features/windowSlice/windowSlice'

import AnimatedSideMenu from './SideMenu.animation'
import StyledSideMenu from './SideMenu.styles'
import ProjectsButtons from './projectsButtons/ProjectsButtons'
import ContentButtons from './contentButtons/ContentButtons'
import Button from '../../ui/button/Button'
import UsedSpace from '../../elements/usedSpace/UsedSpace'
import { IconClose, IconAccount, IconManageProject } from '../../ui/icon/Icons'

import { AnimatePresence } from 'framer-motion'

import logo from '../../../assets/images/img-logo.svg'

const SideMenu = () => {
    const isMenuShown = useSelector(state => state.sideMenu.isShown)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const location = useLocation().pathname
    const { screenNumberSize } = useScreenSize()

    // Setting the menu hidden when screen is bigger than "tablet". The component is always visible then by css.
    // The side menu is set to hidden to make the courtain hide as well. 
    useEffect(() => {
        if (screenNumberSize >= 3) dispatch(toggle(false))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [screenNumberSize])

    // Handling logo click:
    const handleLogoClick = () => {
        navigate('/project')

        dispatch(setTreeLocation(-1))
        dispatch(setSearch(''))
        dispatch(setFilter({ time: null, type: null, star: null }))
        dispatch(setSelected({ folders: [], files: [], selectionStart: null }))

        dispatch(toggle(false))
    }

    // Handling showing the work in progress window:
    const __handleWorkInProgressWindow = () => {
        dispatch(showWindow('WIP'))
    }

    // Rendering the component:
    return <StyledSideMenu className={`${isMenuShown ? 'shown' : ''}`}>
        <AnimatePresence>
            {
                (screenNumberSize >= 3 || isMenuShown) && <AnimatedSideMenu>
                    <div className="container">

                        {/* The logo: */}
                        <section className='logo'>
                            <Button $variant='tertiary' onClick={handleLogoClick}>
                                <img src={logo} alt="Logo multishare" />
                            </Button>

                            <Button className='close-button' $variant='wrong' $size='big' onClick={() => dispatch(toggle(false))}>
                                <IconClose />
                            </Button>
                        </section>

                        {/* Main navigation button - depending on displayed page: */}
                        <section className='nav-menu'>
                            {
                                location === '/projects' ?
                                    <ProjectsButtons />
                                    :
                                    <ContentButtons />
                            }
                        </section>

                        {/* Used projects disk space: */}
                        <section className='used-space' onClick={__handleWorkInProgressWindow}>
                            <UsedSpace />
                        </section>

                        {/* Project managing buttons: */}
                        <section>
                            <Button $variant='tertiary' onClick={__handleWorkInProgressWindow}>
                                <IconManageProject />

                                Zarządzaj projektem
                            </Button>

                            <Button $variant='tertiary' onClick={__handleWorkInProgressWindow}>
                                <IconAccount />

                                Moje konto
                            </Button>
                        </section>
                    </div>
                </AnimatedSideMenu>
            }
        </AnimatePresence>
    </StyledSideMenu>
}

export default SideMenu