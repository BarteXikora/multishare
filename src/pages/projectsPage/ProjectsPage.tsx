/**
 * The projects page, shows all projects list and allows to enter them. 
**/

import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'

import LoadingPage from '../loadingPage/LoadingPage'
import ErrorPage from '../errorPage/ErrorPage'
import ProjectsTopBar from '../../components/layout/projectsTopBar/ProjectsTopBar'
import ProjectsSection from '../../components/layout/projectsSection/ProjectsSection'
import { setSelected } from '../../store/features/contentSlice/contentSlice'

const ProjectsPage = () => {
    const dispatch = useDispatch()

    const userStatus = useSelector(state => state.user)

    // Clearing content selection, so it is clar after selecting a new project:
    useEffect(() => {
        dispatch(setSelected({ folders: [], files: [], selectionStart: null }))

    }, [dispatch])

    // Rendering LoadingPage or ErrorPage depending on stored user status:
    if (userStatus.status === 'LOADING') return <LoadingPage />
    if (userStatus.status === 'ERROR') return <ErrorPage error={userStatus.message} />

    // Rendering the component:
    return <>
        <ProjectsTopBar />

        <ProjectsSection />
    </>
}

export default ProjectsPage