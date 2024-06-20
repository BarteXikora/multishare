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

    useEffect(() => {
        dispatch(setSelected({ folders: [], files: [], selectionStart: null }))

    }, [dispatch])

    if (userStatus.status === 'LOADING') return <LoadingPage />
    if (userStatus.status === 'ERROR') return <ErrorPage error={userStatus.message} />

    return <>
        <ProjectsTopBar />

        <ProjectsSection />
    </>
}

export default ProjectsPage