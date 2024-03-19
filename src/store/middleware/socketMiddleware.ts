import { Dispatch } from '@reduxjs/toolkit'
import { rootStateType } from '../rootReducer.types'
import socket from '../../api/socket'
import { setProjects, setProjectsError } from '../features/projectSlice/projectSlice'
import { resetPreview, setPreview, setPreviewError } from '../features/previewSlice/previewSlice'

import onInitializeUser from './features/onInitializeUser/onInitializeUser'
import onInitializeContent from './features/onInitializeContent/onInitializeContent'

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