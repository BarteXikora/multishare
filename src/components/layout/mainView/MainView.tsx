import { Outlet } from 'react-router-dom'

import SideMenu from '../sideMenu/SideMenu'
import Window from '../window/Window'
import Courtain from '../courtain/Courtain'
import MainBody from '../mainBody/MainBody'

const MainView = () => {
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