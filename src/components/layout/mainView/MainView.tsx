/** 
 * Main View
 * 
 * Rendered in the App for all react-router routes. Renders the routes outlet inside the
 * MainBody component and SideMenu, Window and Courtain components.
 * 
 * It is rendered for all pages so it fetches user data and manages the local storage.
**/

import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { useLocation } from 'react-router-dom'
import { logIn } from '../../../store/features/userSlice/userSlice'
import useLocalStorage from '../../../hooks/useLocalStorage/useLocalStorage'
import { Outlet } from 'react-router-dom'

import SideMenu from '../sideMenu/SideMenu'
import Window from '../window/Window'
import Courtain from '../courtain/Courtain'
import MainBody from '../mainBody/MainBody'
import ErrorPage from '../../../pages/errorPage/ErrorPage'
import LoadingPage from '../../../pages/loadingPage/LoadingPage'

const MainView = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const user = useSelector(state => state.user)

    // Handling user data fetching on load:
    useEffect(() => {
        dispatch(logIn({ pathname: location.pathname }))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Calling the useLocalStorage hook:
    useLocalStorage()

    // Conditional rendering loading and error pages:
    if (user.status === 'LOADING') return <LoadingPage />
    if (user.status === 'ERROR') return <ErrorPage error={user.message} />

    // Rendering the component:
    return <>
        <SideMenu />

        <Window />

        <Courtain />

        <MainBody>
            <Outlet />
        </MainBody>
    </>
}

export default MainView