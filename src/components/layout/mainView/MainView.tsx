import { useEffect } from 'react'
import { useDispatch } from '../../../store/store'
import { useLocation } from 'react-router-dom'
import { logIn } from '../../../store/features/userSlice/userSlice'
import { Outlet } from 'react-router-dom'

import SideMenu from '../sideMenu/SideMenu'
import Window from '../window/Window'
import Courtain from '../courtain/Courtain'
import MainBody from '../mainBody/MainBody'

const MainView = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(logIn({ pathname: location.pathname }))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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