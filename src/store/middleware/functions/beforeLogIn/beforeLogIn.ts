/**
 * beforeLogIn function
 * 
 * This function is called in the socketEvents function if log in action takes place. It returns boolean
 * whitch determinates if the socketEvents function will continue.
 * 
 * It creates the logged_in socket event listener. It also calls socketEventListeners function. 
 */

import socket from '../../../../api/socket'
import { setError, setMessage } from '../../../features/userSlice/userSlice'
import socketEventListeners from '../socketEventListeners/socketEventListeners'

import { Dispatch } from '@reduxjs/toolkit'

const beforeLogIn = (action: any, next: (action: any) => void, dispatch: Dispatch): boolean => {

    // Returning false if payload doesn't contain the pathname value:
    if (!('pathname' in action.payload)) return false

    // Creating the socket event listener for logged_in action:
    socket.once('logged_in', (data: any) => {

        // Dispatching an error if server respondes with one:
        if (!('success' in data)) return dispatch(setError('Wystąpił błąd.'))
        if (!data.success) {
            if (data.fatal) return dispatch(setError(data.message))
            return dispatch(setMessage(data.message))
        }

        // Setting messages if sent from the server:
        if (data.message) dispatch(setMessage(data.message))

        // Calling the next():
        next({ ...action, payload: { ...data.data, message: data.message } })
    })

    // Calling the socketEventListeners function:
    socketEventListeners(next, dispatch)

    return true
}

export default beforeLogIn