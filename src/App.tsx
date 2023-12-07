import AppTheme from './theme/AppTheme'

import SideMenu from './components/layout/sideMenu/SideMenu'
import MainBody from './components/layout/mainBody/MainBody'
import TopBar from './components/layout/topBar/TopBar'
import BodyColumns from './components/layout/bodyColumns/BodyColumns'
import Header from './components/layout/header/Header'
import ContentSection from './components/layout/contentSection/ContentSection'

const App = () => {
  return <AppTheme>
    <SideMenu />

    <MainBody>
      <TopBar />

      <BodyColumns>
        <section className='main-column'>
          <Header />

          <ContentSection />
        </section>

        <aside className='aside-column'></aside>
      </BodyColumns>
    </MainBody>
  </AppTheme>
}

export default App