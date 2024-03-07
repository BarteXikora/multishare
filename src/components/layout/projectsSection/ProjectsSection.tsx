import StyledProjectsSection from './ProjectsSection.styles'
import Project from '../../elements/project/Project'
import LoadingContent from '../../elements/loadingContent/LoadingContent'
import ContentError from '../../elements/contentError/ContentError'

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
        {projects.status === 'LOADING' && <LoadingContent text='Wczytywanie projektów...' />}

        {projects.status === 'ERROR' && <ContentError error={projects.error} />}

        {
            projects.status === 'READY' && <>
                <h2>Dostępne projekty:</h2>

                <div className="content">
                    {
                        projects.content.map(project => (
                            <Project
                                key={project.id}
                                name={project.name}
                                description={project.description}
                                icon={project.icon}
                                onClick={() => handleClick(project)}
                            />
                        ))
                    }
                </div>
            </>
        }
    </StyledProjectsSection>
}

export default ProjectsSection