import { Provider } from 'react-redux'
import { store } from './store/store'

import AppTheme from './theme/AppTheme'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import MainView from './components/layout/mainView/MainView'
import AppPage from './pages/appPage/AppPage'
import ProjectsPage from './pages/projectsPage/ProjectsPage'
import FilePage from './pages/filePage/FilePage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'

import ScreenSize from './components/__dev/__ScreenSize'

const App = () => {
  return (
    <Provider store={store}>
      <AppTheme>
        <ScreenSize />

        <BrowserRouter>
          <Routes>
            <Route element={<MainView />}>
              <Route path='/' element={<Navigate to={'/project'} />} />

              <Route element={<AppPage />}>
                <Route path='/project/*' />

                <Route path='/files/*' />

                <Route path='/trash/*' />
              </Route>

              <Route path='/projects' element={<ProjectsPage />} />

              <Route path='/file/*' element={<FilePage />} />

              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppTheme>
    </Provider>
  )
}

export default App