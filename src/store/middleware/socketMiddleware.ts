import { Dispatch } from '@reduxjs/toolkit'
import { rootStateType } from '../rootReducer.types'
import socket from '../../api/socket'
import { setContent, setError, setTreeLocation } from '../features/contentSlice/contentSlice'
import { selectProject } from '../features/projectSlice/projectSlice'

type paramsType = {
    dispatch: Dispatch
    getState: () => rootStateType
}

const socketMiddleware = () => {
    return (params: paramsType) => (next: any) => (action: any) => {
        const { dispatch } = params

        switch (action.type) {
            case 'contentSlice/initializeContent': {
                let [projectId, folderId] = action.payload.substring(9, action.payload.length).split('/')

                if (projectId === '' || projectId === undefined) projectId = 0

                socket.emit('enter_project', Number(projectId))

                const loadContent = (data: any) => {
                    if (data === null) return dispatch(setError('Nie udało się wczytać projektu!'))
                    if (!data.project || !data.content) return dispatch(setError('Nie udało się wczytać projektu!'))

                    dispatch(selectProject(data.project))
                    dispatch(setContent(data.content))

                    if (folderId) dispatch(setTreeLocation(Number(folderId)))
                }

                socket.once('content', loadContent)
            }
        }

        next(action)
    }
}

export default socketMiddleware