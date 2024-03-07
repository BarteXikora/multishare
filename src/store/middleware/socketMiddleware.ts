import { Dispatch } from '@reduxjs/toolkit'
import socket from '../../api/socket'
import { setProjects, setProjectsError } from '../features/projectSlice/projectSlice'

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
            }
        }

        next(action)
    }
}

export default socketMiddleware