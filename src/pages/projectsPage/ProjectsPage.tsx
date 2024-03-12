import { useEffect } from 'react'
import { useDispatch } from '../../store/store'
import { initializeProjects } from '../../store/features/projectSlice/projectSlice'

import ProjectsTopBar from '../../components/layout/projectsTopBar/ProjectsTopBar'
import ProjectsSection from '../../components/layout/projectsSection/ProjectsSection'

const ProjectsPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeProjects())

    }, [dispatch])

    return <>
        <ProjectsTopBar />

        <ProjectsSection />
    </>
}

export default ProjectsPage