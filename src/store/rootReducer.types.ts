/**
 * rootReducer types
 */

import { sideMenuStateType } from './features/sideMenuSlice/sideMenuSlice'
import { detailsSectionStateType } from './features/detailsSectionSlice/initialState.types'
import { userStateType } from './features/userSlice/userSlice.types'
import { contentStateType } from './features/contentSlice/contentSlice.types'
import { previewStateType } from './features/previewSlice/initialState.types'
import { viewStateType } from './features/viewSlice/initialState.types'
import { windowStateType } from './features/windowSlice/windowSlice.types'
import { uploadListStateType } from './features/uploadListSlice/uploadListSlice.types'
import { contextMenuStateType } from './features/contextMenuSlice/contextMenuSlice'

export type rootStateType = {
    sideMenu: sideMenuStateType,
    detailsSection: detailsSectionStateType,
    user: userStateType,
    content: contentStateType,
    preview: previewStateType,
    view: viewStateType,
    window: windowStateType,
    uploadList: uploadListStateType,
    contextMenu: contextMenuStateType
}