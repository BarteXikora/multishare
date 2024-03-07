import StyledProjectsSection from './ProjectsSection.styles'
import Project from '../../elements/project/Project'

import { useSelector, useDispatch } from '../../../store/store'
import { useNavigate } from 'react-router-dom'
import { selectProject } from '../../../store/features/projectSlice/projectSlice'
import { projectType } from '../../../store/features/projectSlice/projectSlice.types'

const ProjectsSection = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const projects = useSelector(state => state.project.allProjects)

    const handleClick = (project: projectType) => {
        dispatch(selectProject(project))
        navigate('/')
    }

    return <StyledProjectsSection>
        {projects.status === 'LOADING' && <>wczytywanie...</>}

        {projects.status === 'ERROR' && <>wystąpił błąd</>}

        {
            projects.status === 'READY' && projects.content.map(project => (
                <Project key={project.id} name={project.name} onClick={() => handleClick(project)} />
            ))
        }
    </StyledProjectsSection>
}

export default ProjectsSection