import { configureStore } from '@reduxjs/toolkit'
import {
    TypedUseSelectorHook,
    useSelector as useDefaultSelector,
    useDispatch as useDefaultDispatch

} from 'react-redux'

import rootReducer from './rootReducer'
import socketMiddleware from './middleware/socketMiddleware'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware())
})

export const useSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useDefaultSelector
export const useDispatch: () => typeof store.dispatch = useDefaultDispatch