/**
 * store; the redux store
 */

import { configureStore } from '@reduxjs/toolkit'
import {
    TypedUseSelectorHook,
    useSelector as useDefaultSelector,
    useDispatch as useDefaultDispatch

} from 'react-redux'

import rootReducer from './rootReducer'
import socketMiddleware from './middleware/socketMiddleware'

// Creating the store:
export const store = configureStore({
    reducer: rootReducer,

    // Adding the custom middleware (socketMiddleware):
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware())
})

export const useSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useDefaultSelector
export const useDispatch: () => typeof store.dispatch = useDefaultDispatch