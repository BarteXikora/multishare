import { combineReducers } from '@reduxjs/toolkit'

import sideMenuSlice from './features/sideMenuSlice/sideMenuSlice'
import detailsSectionSlice from './features/detailsSectionSlice/detailsSectionSlice'
import userSlice from './features/userSlice/userSlice'
import projectSlice from './features/projectSlice/projectSlice'
import contentSlice from './features/contentSlice/contentSlice'
import previewSlice from './features/previewSlice/previewSlice'
import viewSlice from './features/viewSlice/viewSlice'
import windowSlice from './features/windowSlice/windowSlice'

const rootReducer = combineReducers({
    sideMenu: sideMenuSlice,
    detailsSection: detailsSectionSlice,
    user: userSlice,
    project: projectSlice,
    content: contentSlice,
    preview: previewSlice,
    view: viewSlice,
    window: windowSlice
})

export default rootReducer