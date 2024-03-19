import { Dispatch } from '@reduxjs/toolkit'
import { rootStateType } from '../rootReducer.types'
import socket from '../../api/socket'
import { setContent, setContentError, setTreeLocation } from '../features/contentSlice/contentSlice'
import { selectProject, setProjects, setProjectsError } from '../features/projectSlice/projectSlice'
import { defaultProject } from '../../utilities/userData'
import { resetPreview, setPreview, setPreviewError } from '../features/previewSlice/previewSlice'

type paramsType = {
    dispatch: Dispatch
    getState: () => rootStateType
}

const socketMiddleware = () => {
    return (params: paramsType) => (next: any) => (action: any) => {
        const { dispatch } = params

        switch (action.type) {
            case 'userSlice/initializeUser': {
                socket.on('connect_error', () => {
                    dispatch(setContentError('Nie udało się nawiązać połączenia z serwerem.'))
                    dispatch(setProjectsError('Nie udało się nawiązać połączenia z serwerem.'))
                    dispatch(setPreviewError('Nie udało się nawiązać połączenia z serwerem.'))
                })

                const handleNewFolder = (data: any) => {
                    if (data === null) return alert('error')

                    const action = { type: 'contentSlice/addFolder', payload: data }
                    next(action)

                    return
                }

                socket.on('new_folder', (data: any) => handleNewFolder(data))

                break
            }

            case 'contentSlice/initializeContent': {
                let [projectId, folderId] = action.payload.substring(9, action.payload.length).split('/')

                if (projectId === '' || projectId === undefined) projectId = defaultProject

                socket.emit('enter_project', Number(projectId))

                const loadContent = (data: any) => {
                    if (data === null) return dispatch(setContentError('Nie udało się wczytać projektu!'))
                    if (!data.project || !data.content) return dispatch(setContentError('Nie udało się wczytać projektu!'))

                    dispatch(selectProject(data.project))
                    dispatch(setContent(data.content))

                    if (folderId) dispatch(setTreeLocation(folderId !== 'home' ? Number(folderId) : -1))
                }

                socket.once('content', loadContent)

                break
            }

            case 'contentSlice/addFolder': {
                socket.emit('add_folder', action.payload)

                return
            }

            case 'projectSlice/initializeProjects': {
                socket.emit('get_projects')

                socket.once('projects', (data: any) => {
                    if (data === null) return dispatch(setProjectsError('Nie udało się wczytać dostępnych projektów.'))

                    dispatch(setProjects(data))
                })

                break
            }

            case 'previewSlice/initializePreview': {
                dispatch(resetPreview())

                let fileId = action.payload

                if (Number.isNaN(fileId)) return dispatch(setPreviewError('Wybrany plik nie istnieje.'))

                socket.emit('get_file', fileId)

                socket.once('file', (data: any) => {
                    if (data === null) dispatch(setPreviewError('Wybrany plik nie istnieje.'))

                    dispatch(setPreview(data))
                })

                break
            }
        }

        next(action)
    }
}

export default socketMiddleware