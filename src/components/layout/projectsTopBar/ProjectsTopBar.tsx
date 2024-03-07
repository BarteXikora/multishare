import { useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/sideMenuSlice/sideMenuSlice'

import StyledProjectsTopBar from './ProjectsTopBar.styles'
import Button from '../../ui/button/Button'
import SearchInput from '../../elements/searchInput/SearchInput'

import iconHamburger from '../../../assets/icons/icon-hamburger.svg'
import iconProjects from '../../../assets/icons/icon-projects-dark.svg'
import iconAdd from '../../../assets/icons/icon-add.svg'

const ProjectsTopBar = () => {
    const dispatch = useDispatch()

    return <StyledProjectsTopBar>
        <div className='main'>
            <Button className='hamburger-button' $size='big' onClick={() => dispatch(toggle())}>
                <img src={iconHamburger} alt='Otwórz menu' />
            </Button>

            <h1>
                <img src={iconProjects} alt='Projekty' />

                <span>Projekty:</span>
            </h1>
        </div>

        <div className="side">
            <Button $variant='primary' $size='big' className='create-project-btn'>
                <img src={iconAdd} alt='Utwórz projekt' />

                <span>Utwórz projekt</span>
            </Button>

            <SearchInput placeholder='Szukaj projektu...' />
        </div>
    </StyledProjectsTopBar>
}

export default ProjectsTopBar