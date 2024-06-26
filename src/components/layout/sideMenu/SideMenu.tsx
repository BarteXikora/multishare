import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/sideMenuSlice/sideMenuSlice'
import { useNavigate, useLocation } from 'react-router-dom'
import useScreenSize from '../../../hooks/useScreenSize/useScreenSize'
import { setFilter, setSearch, setSelected, setTreeLocation } from '../../../store/features/contentSlice/contentSlice'

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

    useEffect(() => {
        if (screenNumberSize >= 3) dispatch(toggle(false))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [screenNumberSize])

    const handleLogoClick = () => {
        navigate('/project')

        dispatch(setTreeLocation(-1))
        dispatch(setSearch(''))
        dispatch(setFilter({ time: null, type: null, star: null }))
        dispatch(setSelected({ folders: [], files: [], selectionStart: null }))

        dispatch(toggle(false))
    }

    return <StyledSideMenu className={`${isMenuShown ? 'shown' : ''}`}>
        <AnimatePresence>
            {
                (screenNumberSize >= 3 || isMenuShown) && <AnimatedSideMenu>
                    <div className="container">
                        <section className='logo'>
                            <Button $variant='tertiary' onClick={handleLogoClick}>
                                <img src={logo} alt="Logo multishare" />
                            </Button>

                            <Button className='close-button' $variant='wrong' $size='big' onClick={() => dispatch(toggle(false))}>
                                <IconClose />
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
                            <Button $variant='tertiary'>
                                <IconManageProject />

                                Zarządzaj projektem
                            </Button>

                            <Button $variant='tertiary'>
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