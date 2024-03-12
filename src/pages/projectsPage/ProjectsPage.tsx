import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import { initializeProjects } from '../../store/features/projectSlice/projectSlice'

import LoadingPage from '../loadingPage/LoadingPage'
import ErrorPage from '../errorPage/ErrorPage'
import ProjectsTopBar from '../../components/layout/projectsTopBar/ProjectsTopBar'
import ProjectsSection from '../../components/layout/projectsSection/ProjectsSection'

const ProjectsPage = () => {
    const dispatch = useDispatch()

    const projectsStatus = useSelector(state => state.project.allProjects)

    useEffect(() => {
        dispatch(initializeProjects())

    }, [dispatch])

    if (projectsStatus.status === 'LOADING') return <LoadingPage />
    if (projectsStatus.status === 'ERROR') return <ErrorPage error={projectsStatus.error} />

    return <>
        <ProjectsTopBar />

        <ProjectsSection />
    </>
}

export default ProjectsPage