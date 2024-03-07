import { Provider } from 'react-redux'
import { store } from './store/store'

import AppTheme from './theme/AppTheme'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainView from './components/layout/mainView/MainView'
import AppPage from './pages/appPage/AppPage'
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
              <Route path='/' element={<AppPage />} />
            </Route>

            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </AppTheme>
    </Provider>
  )
}

export default App