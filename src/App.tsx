import { Provider } from 'react-redux'
import { store } from './store/store'

import AppTheme from './theme/AppTheme'

import SideMenu from './components/layout/sideMenu/SideMenu'
import Courtain from './components/layout/courtain/Courtain'
import MainBody from './components/layout/mainBody/MainBody'
import TopBar from './components/layout/topBar/TopBar'
import BodyColumns from './components/layout/bodyColumns/BodyColumns'
import Header from './components/layout/header/Header'
import ContentSection from './components/layout/contentSection/ContentSection'
import DetailsSection from './components/layout/detailsSection/DetailsSection'

import ScreenSize from './components/__dev/__ScreenSize'

const App = () => {
  return (
    <Provider store={store}>
      <AppTheme>
        <ScreenSize />

        <SideMenu />

        <Courtain />

        <MainBody>
          <TopBar />

          <BodyColumns>
            <section className='main-column'>
              <Header />

              <ContentSection />
            </section>

            <aside className='aside-column'>
              <DetailsSection />
            </aside>
          </BodyColumns>
        </MainBody>
      </AppTheme>
    </Provider>
  )
}

export default App