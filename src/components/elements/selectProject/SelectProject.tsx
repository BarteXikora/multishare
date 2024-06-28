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

    const handleClick = () => {
        navigate('/projects')
    }

    return <StyledSelectProject>
        <Button className='current-project-button' $variant='quaternary' onClick={() => dispatch(setTreeLocation(-1))}>
            <h1>
                <IconFolder $color='dark' $size='big' />

                {getShortenName(projectName, 30)}:
            </h1>
        </Button>

        <Button className='desktop-button' $size='big' onClick={handleClick}>
            <IconProjects />

            Wszystkie projekty

            <IconArrowDown />
        </Button>

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