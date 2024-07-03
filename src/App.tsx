import { Provider } from 'react-redux'
import { store } from './store/store'

import AppTheme from './theme/AppTheme'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import MainView from './components/layout/mainView/MainView'
import AppPage from './pages/appPage/AppPage'
import ProjectsPage from './pages/projectsPage/ProjectsPage'
import FilePage from './pages/filePage/FilePage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'

const App = () => {
  return (
    <Provider store={store}>
      <AppTheme>
        <BrowserRouter>
          <Routes>
            <Route element={<MainView />}>
              <Route path='/' element={<Navigate to={'/project'} />} />

              <Route path='/project/*' element={<AppPage />} />
              <Route path='/files/*' element={<AppPage />} />
              <Route path='/trash/*' element={<AppPage />} />

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