/** 
 * Projects section
 * 
 * Rendered in the ProjectsPage. Displays the list of projects and allows to select one.
**/

import StyledProjectsSection from './ProjectsSection.styles'
import Project from '../../elements/project/Project'
import LoadingContent from '../../elements/loadingContent/LoadingContent'

import { useSelector, useDispatch } from '../../../store/store'
import { useNavigate } from 'react-router-dom'
import { projectType } from '../../../store/features/userSlice/userSlice.types'
import { resetContent, setTreeLocation } from '../../../store/features/contentSlice/contentSlice'
import { selectProject } from '../../../store/features/userSlice/userSlice'

const ProjectsSection = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(state => state.user)

    // Handling the project selection on click:
    const handleClick = (project: projectType) => {
        dispatch(resetContent())

        dispatch(selectProject(project.id))
        navigate('/project')
        dispatch(setTreeLocation(-1))
    }

    // Rendering the component:
    return <StyledProjectsSection>
        {user.status === 'LOADING' && <LoadingContent text='Wczytywanie projektów...' />}

        {
            user.status === 'READY' && <>
                <h2>Dostępne projekty:</h2>

                <div className="content">
                    {
                        user.project.allProjects.map(project => (
                            <Project
                                key={project.id}
                                name={project.name}
                                description={project.description}
                                icon={project.icon}
                                onClick={() => handleClick(project)}
                                isSelected={user.project.selectedProject.id === project.id}
                            />
                        ))
                    }
                </div>
            </>
        }
    </StyledProjectsSection>
}

export default ProjectsSection