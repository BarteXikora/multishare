import { useEffect } from 'react'
import { useDispatch } from '../../../store/store'
import { initializeUser } from '../../../store/features/userSlice/userSlice'
import { Outlet } from 'react-router-dom'

import SideMenu from '../sideMenu/SideMenu'
import Window from '../window/Window'
import Courtain from '../courtain/Courtain'
import MainBody from '../mainBody/MainBody'

const MainView = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeUser())

    }, [dispatch])

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