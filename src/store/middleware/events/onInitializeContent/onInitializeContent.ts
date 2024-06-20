import { Dispatch } from '@reduxjs/toolkit'
import { rootStateType } from '../../../rootReducer.types'
import { setContentError, setContent, setTreeLocation, setDisplayType } from '../../../features/contentSlice/contentSlice'
import { selectProject } from '../../../features/userSlice/userSlice'
import { displayTypeType } from '../../../features/contentSlice/contentSlice.types'

import socket from '../../../../api/socket'
import getDisplayTypeFromPathname from '../../../../functions/getDisplayTypeFromPathname/getDisplayTypeFromPathname'

const onInitializeContent = (dispatch: Dispatch, getState: () => rootStateType, action: any) => {
    const displayType: displayTypeType = getDisplayTypeFromPathname(action.payload)

    const pathnameData = action.payload.substring(1, action.payload.length).split('/')
    let projectId: string | undefined = pathnameData[1]
    let folderId: string | undefined = pathnameData[2]

    if (projectId === '' || projectId === undefined) projectId = '0' // getState().user.defaultProject.toString()

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