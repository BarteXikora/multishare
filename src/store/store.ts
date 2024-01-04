import { configureStore } from '@reduxjs/toolkit'
import {
    TypedUseSelectorHook,
    useSelector as useDefaultSelector,
    useDispatch as useDefaultDispatch

} from 'react-redux'

import sideMenuSlice from './features/sideMenuSlice/sideMenuSlice'

export const store = configureStore({
    reducer: {
        sideMenu: sideMenuSlice
    }
})

export const useSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useDefaultSelector
export const useDispatch: () => typeof store.dispatch = useDefaultDispatch