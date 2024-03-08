import { Dispatch } from '@reduxjs/toolkit'
import socket from '../../api/socket'
import { setProjects, setProjectsError } from '../features/projectSlice/projectSlice'
import { resetContent, setContent, setError } from '../features/contentSlice/contentSlice'

type paramsType = {
    dispatch: Dispatch
}

const socketMiddleware = () => {
    return (params: paramsType) => (next: any) => (action: any) => {
        const { dispatch } = params

        switch (action.type) {
            case 'projectSlice/initialize': {
                socket.emit('get_projects')

                socket.on('connect_error', () => {
                    dispatch(setProjectsError('Nie udało się nawiązać połączenia z serwerem.'))
                })

                socket.on('projects', (data: any) => {
                    if (!Array.isArray(data)) dispatch(setProjectsError('Nie udało się wczytać listy projektów.'))
                    else dispatch(setProjects(data))
                })

                socket.on('content', (data: any) => {
                    if (data === null || data === undefined) dispatch(setError('Nie udało się wczytać projektu.'))
                    else dispatch(setContent(data))
                })

                break
            }

            case 'projectSlice/selectProject': {
                socket.emit('enter_project', action.payload.id)

                break
            }

            case 'projectSlice/resetProject': {
                dispatch(resetContent())
            }
        }

        next(action)
    }
}

export default socketMiddleware