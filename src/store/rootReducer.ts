import { combineReducers } from '@reduxjs/toolkit'

import sideMenuSlice from './features/sideMenuSlice/sideMenuSlice'
import detailsSectionSlice from './features/detailsSectionSlice/detailsSectionSlice'
import projectSlice from './features/projectSlice/projectSlice'
import contentSlice from './features/contentSlice/contentSlice'
import previewSlice from './features/previewSlice/previewSlice'
import viewSlice from './features/viewSlice/viewSlice'

const rootReducer = combineReducers({
    sideMenu: sideMenuSlice,
    detailsSection: detailsSectionSlice,
    project: projectSlice,
    content: contentSlice,
    preview: previewSlice,
    view: viewSlice
})

export default rootReducer