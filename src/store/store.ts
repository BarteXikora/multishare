import { configureStore } from '@reduxjs/toolkit'
import {
    TypedUseSelectorHook,
    useSelector as useDefaultSelector,
    useDispatch as useDefaultDispatch

} from 'react-redux'

import sideMenuSlice from './features/sideMenuSlice/sideMenuSlice'
import detailsSectionSlice from './features/detailsSectionSlice/detailsSectionSlice'
import projectSlice from './features/projectSlice/projectSlice'
import contentSlice from './features/contentSlice/contentSlice'
import viewSlice from './features/viewSlice/viewSlice'

import socketMiddleware from './middleware/socketMiddleware'

export const store = configureStore({
    reducer: {
        sideMenu: sideMenuSlice,
        detailsSection: detailsSectionSlice,
        project: projectSlice,
        content: contentSlice,
        view: viewSlice
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware())
})

export const useSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useDefaultSelector
export const useDispatch: () => typeof store.dispatch = useDefaultDispatch