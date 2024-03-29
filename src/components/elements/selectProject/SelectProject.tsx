import { useSelector, useDispatch } from '../../../store/store'
import { useNavigate } from 'react-router-dom'
import { setTreeLocation } from '../../../store/features/contentSlice/contentSlice'
import { resetProject } from '../../../store/features/projectSlice/projectSlice'
import getShortenName from '../../../functions/getShortenName/getShortenName'

import StyledSelectProject from './SelectProject.styles'
import Button from '../../ui/button/Button'

import iconFolder from '../../../assets/icons/icon-folder-dark.svg'
import iconSelectProject from '../../../assets/icons/icon-projects.svg'
import iconArrow from '../../../assets/icons/icon-arrow-down.svg'
import iconArrowBig from '../../../assets/icons/icon-arrow-down-big.svg'

const SelectProject = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const projectName = useSelector(state => state.project.selectedProject ? state.project.selectedProject.name : '')

    const handleClick = () => {
        dispatch(resetProject())
        navigate('/projects')
    }

    return <StyledSelectProject>
        <Button className='current-project-button' $variant='quaternary' onClick={() => dispatch(setTreeLocation(-1))}>
            <h1>
                <img src={iconFolder} alt="Wybrany projekt" />

                {getShortenName(projectName, 30)}:
            </h1>
        </Button>

        <Button className='desktop-button' $size='big' onClick={handleClick}>
            <img src={iconSelectProject} alt="Projekty" />

            Wszystkie projekty

            <img src={iconArrow} alt="Wybierz projekt" />
        </Button>

        <Button className='mobile-button' $variant='secondary' $size='big' onClick={handleClick}>
            <div className="project-name">{getShortenName(projectName, 30)}</div>

            <div className="icon-arrow">
                <img src={iconArrowBig} alt="Wybierz projekt" />
            </div>
        </Button>
    </StyledSelectProject>
}

export default SelectProject