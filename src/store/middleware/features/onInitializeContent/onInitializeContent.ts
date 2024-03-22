import { Dispatch } from '@reduxjs/toolkit'
import { rootStateType } from '../../../rootReducer.types'
import { setContentError, setContent, setTreeLocation, setDisplayType } from '../../../features/contentSlice/contentSlice'
import { selectProject } from '../../../features/projectSlice/projectSlice'
import { displayTypeType } from '../../../features/contentSlice/contentSlice.types'

import socket from '../../../../api/socket'

const onInitializeContent = (dispatch: Dispatch, getState: () => rootStateType, action: any) => {
    const displayType: displayTypeType = /\/files/.test(action.payload) ? 'FILES' : 'TREE'

    let [projectId, folderId]: [string, string]
        = action.payload.substring(displayType === 'TREE' ? 9 : 7, action.payload.length).split('/')

    if (projectId === '' || projectId === undefined) projectId = getState().user.defaultProject.toString()

    socket.emit('enter_project', Number(projectId))

    const loadContent = (data: any) => {
        const errorMessage = 'Nie udało się wczytać projektu!'

        if (data === null) return dispatch(setContentError(errorMessage))
        if (!data.project || !data.content) return dispatch(setContentError(errorMessage))

        dispatch(selectProject(data.project))
        dispatch(setContent(data.content))

        dispatch(setDisplayType(displayType))

        if (displayType === 'TREE' && folderId) dispatch(setTreeLocation(folderId !== 'home' ? Number(folderId) : -1))
        else dispatch(setTreeLocation(-1))
    }

    socket.once('content', loadContent)
}

export default onInitializeContent