/** 
 * Select project; info about current project and button to select another
 * 
 * Component displays selected projects name in the form of the button click on whitch sets the
 * folders tree location to the home folder. It also display the select project button.
 * 
 * The visual form of the component depends on screen size, it is different for desktop and mobile.
**/

import { useSelector, useDispatch } from '../../../store/store'
import { useNavigate } from 'react-router-dom'
import { setTreeLocation } from '../../../store/features/contentSlice/contentSlice'
import getShortenName from '../../../functions/getShortenName/getShortenName'

import StyledSelectProject from './SelectProject.styles'
import Button from '../../ui/button/Button'
import { IconFolder, IconProjects, IconArrowDown } from '../../ui/icon/Icons'

const SelectProject = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const projectName = useSelector(state => state.user.status === 'READY' ? state.user.project.selectedProject.name : '')

    // Handling setting folders tree location to home folder:
    const handleClick = () => {
        navigate('/projects')
    }

    // Rendering the component:
    return <StyledSelectProject>

        {/* Selected folder button: */}
        <Button className='current-project-button' $variant='quaternary' onClick={() => dispatch(setTreeLocation(-1))}>
            <h1>
                <IconFolder $color='dark' $size='big' />

                {getShortenName(projectName, 30)}:
            </h1>
        </Button>

        {/* Select folder button: */}
        <Button className='desktop-button' $size='big' onClick={handleClick}>
            <IconProjects />

            Wszystkie projekty

            <IconArrowDown />
        </Button>

        {/* Mobile variant: */}
        <div className="mobile-button">
            <Button $variant='secondary' $size='big' className='project-name' onClick={() => dispatch(setTreeLocation(-1))}>
                {getShortenName(projectName, 30)}
            </Button>

            <Button $variant='secondary' $size='big' className='icon-arrow' onClick={handleClick}>
                <IconArrowDown $color='dark' />
            </Button>
        </div>
    </StyledSelectProject>
}

export default SelectProject