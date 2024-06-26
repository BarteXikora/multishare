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

        <Button className='mobile-button' $variant='secondary' $size='big' onClick={handleClick}>
            <div className="project-name">{getShortenName(projectName, 30)}</div>

            <div className="icon-arrow">
                <IconArrowDown />
            </div>
        </Button>
    </StyledSelectProject>
}

export default SelectProject