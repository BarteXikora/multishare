/** 
 * This is the root component of the application.
 * It sets up the Redux store using Provider, applies the theme using AppTheme, 
 * and sets up routing using BrowserRouter and Routes.
**/

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

              {/* Redirects "/" to "/project"; next part of the pathname in managed in the useUpdatePathName hook */}
              <Route path='/' element={<Navigate to={'/project'} />} />

              {/* Rnders AppPag component for "/projct", "/fils" and "/trash" */}
              <Route path='/project/*' element={<AppPage />} />
              <Route path='/files/*' element={<AppPage />} />
              <Route path='/trash/*' element={<AppPage />} />

              {/* Rendrs ProjectsPage for "/projects" */}
              <Route path='/projects' element={<ProjectsPage />} />

              {/* Rendrs FilePage for "/file" */}
              <Route path='/file/*' element={<FilePage />} />

              {/* Rendrs NotFoundPage for any other pathname */}
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppTheme>
    </Provider>
  )
}

export default App