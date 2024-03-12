import { Dispatch } from '@reduxjs/toolkit'
import { rootStateType } from '../rootReducer.types'
import socket from '../../api/socket'
import { setContent, setError, setTreeLocation } from '../features/contentSlice/contentSlice'
import { selectProject, setProjects, setProjectsError } from '../features/projectSlice/projectSlice'

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

                    if (folderId) dispatch(setTreeLocation(folderId !== 'home' ? Number(folderId) : -1))
                }

                socket.once('content', loadContent)

                break
            }

            case 'projectSlice/initializeProjects': {
                socket.emit('get_projects')

                socket.once('projects', (data: any) => {
                    if (data === null) return dispatch(setProjectsError('Nie udało się wczytać dostępnych projektów.'))

                    dispatch(setProjects(data))
                })

                break
            }
        }

        next(action)
    }
}

export default socketMiddleware