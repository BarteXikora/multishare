import { useEffect } from 'react'
import { useDispatch, useSelector } from '../../store/store'
import { useLocation } from 'react-router-dom'
import { initializeContent } from '../../store/features/contentSlice/contentSlice'

import LoadingPage from '../loadingPage/LoadingPage'
import ErrorPage from '../errorPage/ErrorPage'

import TopBar from '../../components/layout/topBar/TopBar'
import BodyColumns from '../../components/layout/bodyColumns/BodyColumns'
import MainColumn from '../../components/layout/bodyColumns/mainColumn/MainColumn'
import AsideColumn from '../../components/layout/bodyColumns/asideColumn/AsideColumn'
import Header from '../../components/layout/header/Header'
import ContentSection from '../../components/layout/contentSection/ContentSection'
import DetailsSection from '../../components/layout/detailsSection/DetailsSection'

const AppPage = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const contentStatus = useSelector(state => state.content.loadedContent)

    useEffect(() => {
        dispatch(initializeContent(location.pathname))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (contentStatus.status === 'LOADING') return <LoadingPage />
    if (contentStatus.status === 'ERROR') return <ErrorPage error={contentStatus.error} />

    return <>
        <TopBar />

        <BodyColumns>
            <MainColumn>
                <Header />

                <ContentSection />
            </MainColumn>

            <AsideColumn>
                <DetailsSection />
            </AsideColumn>
        </BodyColumns>
    </>
}

export default AppPage