/** 
 * Projects top bar
 * 
 * This is the tob bar for the projcts page.
**/

import { useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/sideMenuSlice/sideMenuSlice'

import StyledProjectsTopBar from './ProjectsTopBar.styles'
import Button from '../../ui/button/Button'
import { IconHamburger, IconProjects, IconAdd } from '../../ui/icon/Icons'

const ProjectsTopBar = () => {
    const dispatch = useDispatch()

    // Rendering the component:
    return <StyledProjectsTopBar>
        <div className='main'>
            <Button className='hamburger-button' $size='big' onClick={() => dispatch(toggle())}>
                <IconHamburger />
            </Button>

            <h1>
                <IconProjects $color='dark' $size='big' />

                <span>Projekty:</span>
            </h1>
        </div>

        <div className="side">
            <Button $variant='primary' $size='big' className='create-project-btn'>
                <IconAdd />

                <span>Utwórz projekt</span>
            </Button>
        </div>
    </StyledProjectsTopBar>
}

export default ProjectsTopBar