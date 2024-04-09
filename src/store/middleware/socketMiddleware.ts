import { Dispatch } from '@reduxjs/toolkit'
import { rootStateType } from '../rootReducer.types'

import onInitializeUser from './features/onInitializeUser/onInitializeUser'
import onInitializeContent from './features/onInitializeContent/onInitializeContent'
import onAddFolder from './features/onAddFolder/onAddFolder'
import onMoveToTrash from './features/onMoveToTrash/onMoveToTrash'
import onInitializeProjects from './features/onInitializeProjects/onInitializeProjects'
import onInitializePreview from './features/onInitializePreview/onInitializePreview'

type paramsType = {
    dispatch: Dispatch
    getState: () => rootStateType
}

const socketMiddleware = () => {
    return (params: paramsType) => (next: any) => (action: any) => {
        const { dispatch, getState } = params

        switch (action.type) {
            case 'userSlice/initializeUser': onInitializeUser(dispatch, next); break
            case 'contentSlice/initializeContent': onInitializeContent(dispatch, getState, action); break
            case 'contentSlice/addFolder': onAddFolder(action); return
            case 'contentSlice/moveToTrash': onMoveToTrash(action); return
            case 'projectSlice/initializeProjects': onInitializeProjects(dispatch); break
            case 'previewSlice/initializePreview': onInitializePreview(dispatch, action)
        }

        next(action)
    }
}

export default socketMiddleware