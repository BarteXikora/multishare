import { Dispatch } from '@reduxjs/toolkit'
import { setProjectsError, setProjects } from '../../../features/projectSlice/projectSlice'

import socket from '../../../../api/socket'

const onInitializeProjects = (dispatch: Dispatch) => {
    socket.emit('get_projects')

    socket.once('projects', (data: any) => {
        if (data === null) return dispatch(setProjectsError('Nie udało się wczytać dostępnych projektów.'))

        dispatch(setProjects(data))
    })
}

export default onInitializeProjects