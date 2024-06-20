import { Dispatch } from '@reduxjs/toolkit'
import { rootStateType } from '../rootReducer.types'

import onLogIn from './events/onLogIn/onLogIn'
import onInitializeContent from './events/onInitializeContent/onInitializeContent'
import onDownloadElements from './events/onDownloadElements/onDownloadElements'
import onAddFolder from './events/onAddFolder/onAddFolder'
import onUpdateContent from './events/onUpdateContent/onUpdateContent'
import onMoveToTrash from './events/onMoveToTrash/onMoveToTrash'
import onRestoreFromTrash from './events/onRestoreFromTrash/onRestoreFromTrash'
import onDeleteForever from './events/onDeleteForever/onDeleteForever'
import onInitializePreview from './events/onInitializePreview/onInitializePreview'
import onAddFiles from './events/onAddFiles/onAddFiles'

type paramsType = {
    dispatch: Dispatch
    getState: () => rootStateType
}

const socketMiddleware = () => {
    return (params: paramsType) => (next: any) => (action: any) => {
        const { dispatch } = params

        switch (action.type) {
            case 'userSlice/logIn': onLogIn(next, action); return
            case 'contentSlice/initializeContent': onInitializeContent(dispatch); break
            case 'contentSlice/downloadElements': onDownloadElements(action); return
            case 'contentSlice/addFolder': onAddFolder(action); return
            case 'contentSlice/updateContent': onUpdateContent(action); return
            case 'contentSlice/moveToTrash': onMoveToTrash(action); return
            case 'contentSlice/restoreFromTrash': onRestoreFromTrash(action); return
            case 'contentSlice/deleteForever': onDeleteForever(action); return
            case 'previewSlice/initializePreview': onInitializePreview(dispatch, action); break
            case 'uploadSlice/addFiles': onAddFiles(action)
        }

        next(action)
    }
}

export default socketMiddleware