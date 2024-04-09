import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

import initializeContentReducer from './reducers/initializeContent/initializeContent'
import setContentReducer from './reducers/setContent/setContent'
import setContentErrorRducer from './reducers/setContentError/setContentError'
import resetContentReducer from './reducers/resetContent/resetContent'
import setSelectedReducer from './reducers/setSelected/setSelected'
import setTreeLocationReducer from './reducers/setTreeLocation/setTreeLocation'
import setDisplayTypeReducer from './reducers/setDisplayType/setDisplayType'
import addFolderReducer from './reducers/addFolder/addFolder'
import moveToTrashReducer from './reducers/moveToTrash/moveToTrash'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {
        initializeContent: initializeContentReducer,
        setContent: setContentReducer,
        setContentError: setContentErrorRducer,
        resetContent: resetContentReducer,
        setSelected: setSelectedReducer,
        setTreeLocation: setTreeLocationReducer,
        setDisplayType: setDisplayTypeReducer,
        addFolder: addFolderReducer,
        moveToTrash: moveToTrashReducer
    }
})

export default contentSlice.reducer

export const {
    initializeContent, setContent, setContentError, resetContent,
    setSelected, setTreeLocation, setDisplayType, addFolder, moveToTrash

} = contentSlice.actions