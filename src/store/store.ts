import { configureStore } from '@reduxjs/toolkit'
import {
    TypedUseSelectorHook,
    useSelector as useDefaultSelector,
    useDispatch as useDefaultDispatch

} from 'react-redux'

export const store = configureStore({
    reducer: {}
})

export const useSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useDefaultSelector
export const useDispatch: () => typeof store.dispatch = useDefaultDispatch