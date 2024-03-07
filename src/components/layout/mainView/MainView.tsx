import { Outlet } from 'react-router-dom'

import SideMenu from '../sideMenu/SideMenu'
import Courtain from '../courtain/Courtain'
import MainBody from '../mainBody/MainBody'

const MainView = () => {
    return <>
        <SideMenu />

        <Courtain />

        <MainBody>
            <Outlet />
        </MainBody>
    </>
}

export default MainView