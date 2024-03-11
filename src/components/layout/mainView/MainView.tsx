import { Outlet } from 'react-router-dom'

import LoadingPage from '../../../pages/loadingPage/LoadingPage'
import SideMenu from '../sideMenu/SideMenu'
import Courtain from '../courtain/Courtain'
import MainBody from '../mainBody/MainBody'

const MainView = () => {
    return <LoadingPage />

    return <>
        <SideMenu />

        <Courtain />

        <MainBody>
            <Outlet />
        </MainBody>
    </>
}

export default MainView