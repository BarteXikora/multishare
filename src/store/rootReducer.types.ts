import { sideMenuStateType } from './features/sideMenuSlice/sideMenuSlice'
import { detailsSectionStateType } from './features/detailsSectionSlice/initialState.types'
import { projectStateType } from './features/projectSlice/projectSlice.types'
import { contentStateType } from './features/contentSlice/contentSlice.types'
import { viewStateType } from './features/viewSlice/initialState.types'

export type rootStateType = {
    sideMenu: sideMenuStateType,
    detailsSection: detailsSectionStateType,
    project: projectStateType,
    content: contentStateType,
    view: viewStateType
}