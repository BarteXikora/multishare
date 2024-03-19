import { Dispatch } from '@reduxjs/toolkit'
import { rootStateType } from '../../../rootReducer.types'
import { setContentError, setContent, setTreeLocation } from '../../../features/contentSlice/contentSlice'
import { selectProject } from '../../../features/projectSlice/projectSlice'

import socket from '../../../../api/socket'

const onInitializeContent = (dispatch: Dispatch, getState: () => rootStateType, action: any) => {
    let [projectId, folderId] = action.payload.substring(9, action.payload.length).split('/')

    if (projectId === '' || projectId === undefined) projectId = getState().user.defaultProject

    socket.emit('enter_project', Number(projectId))

    const loadContent = (data: any) => {
        const errorMessage = 'Nie udało się wczytać projektu!'

        if (data === null) return dispatch(setContentError(errorMessage))
        if (!data.project || !data.content) return dispatch(setContentError(errorMessage))

        dispatch(selectProject(data.project))
        dispatch(setContent(data.content))

        if (folderId) dispatch(setTreeLocation(folderId !== 'home' ? Number(folderId) : -1))
    }

    socket.once('content', loadContent)
}

export default onInitializeContent