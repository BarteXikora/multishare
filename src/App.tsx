import AppTheme from './theme/AppTheme'

import SideMenu from './components/layout/sideMenu/SideMenu'
import MainBody from './components/layout/mainBody/MainBody'
import TopBar from './components/layout/topBar/TopBar'

const App = () => {
  return <AppTheme>
    <SideMenu />

    <MainBody>
      <TopBar />
    </MainBody>
  </AppTheme>
}

export default App