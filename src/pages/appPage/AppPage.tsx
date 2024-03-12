import { useEffect } from 'react'
import { useDispatch } from '../../store/store'
import { useLocation } from 'react-router-dom'
import { initializeContent } from '../../store/features/contentSlice/contentSlice'

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

    useEffect(() => {
        dispatch(initializeContent(location.pathname))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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