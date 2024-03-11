import TopBar from '../../components/layout/topBar/TopBar'
import BodyColumns from '../../components/layout/bodyColumns/BodyColumns'
import MainColumn from '../../components/layout/bodyColumns/mainColumn/MainColumn'
import AsideColumn from '../../components/layout/bodyColumns/asideColumn/AsideColumn'
import Header from '../../components/layout/header/Header'
import ContentSection from '../../components/layout/contentSection/ContentSection'
import DetailsSection from '../../components/layout/detailsSection/DetailsSection'

const AppPage = () => {
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