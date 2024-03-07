import { Dispatch } from '@reduxjs/toolkit'
import socket from '../../api/socket'
import { setProjects, setProjectsError } from '../features/projectSlice/projectSlice'
import { setContent, setError } from '../features/contentSlice/contentSlice'

type paramsType = {
    dispatch: Dispatch
}

const socketMiddleware = () => {
    return (params: paramsType) => (next: any) => (action: any) => {
        const { dispatch } = params

        switch (action.type) {
            case 'projectSlice/initialize': {
                socket.emit('get_projects')

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
            }
        }

        next(action)
    }
}

export default socketMiddleware