import ProjectsTopBar from '../../components/layout/projectsTopBar/ProjectsTopBar'
import ProjectsSection from '../../components/layout/projectsSection/ProjectsSection'

import { useEffect } from 'react'
import { useDispatch } from '../../store/store'
import { initialize } from '../../store/features/projectSlice/projectSlice'

const ProjectsPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initialize())

    }, [dispatch])

    return <>
        <ProjectsTopBar />

        <ProjectsSection />
    </>
}

export default ProjectsPage