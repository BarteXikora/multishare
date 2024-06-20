import { combineReducers } from '@reduxjs/toolkit'

import sideMenuSlice from './features/sideMenuSlice/sideMenuSlice'
import detailsSectionSlice from './features/detailsSectionSlice/detailsSectionSlice'
import userSlice from './features/userSlice/userSlice'
import contentSlice from './features/contentSlice/contentSlice'
import previewSlice from './features/previewSlice/previewSlice'
import viewSlice from './features/viewSlice/viewSlice'
import windowSlice from './features/windowSlice/windowSlice'
import uploadListSlice from './features/uploadListSlice/uploadListSlice'
import contextMenuSlice from './features/contextMenuSlice/contextMenuSlice'

const rootReducer = combineReducers({
    sideMenu: sideMenuSlice,
    detailsSection: detailsSectionSlice,
    user: userSlice,
    content: contentSlice,
    preview: previewSlice,
    view: viewSlice,
    window: windowSlice,
    uploadList: uploadListSlice,
    contextMenu: contextMenuSlice
})

export default rootReducer