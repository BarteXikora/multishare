import StyledProjectsSection from './ProjectsSection.tyles'
import Project from '../../elements/project/Project'

import { useSelector } from '../../../store/store'

const ProjectsSection = () => {
    const projects = useSelector(state => state.project.allProjects)

    return <StyledProjectsSection>
        {projects.status === 'LOADING' && <>wczytywanie...</>}

        {projects.status === 'ERROR' && <>wystąpił błąd</>}

        {
            projects.status === 'READY' && projects.content.map(project => (
                <Project key={project.id} name={project.name} />
            ))
        }
    </StyledProjectsSection>
}

export default ProjectsSection