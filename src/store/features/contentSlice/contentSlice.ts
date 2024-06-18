import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

import initializeContentReducer from './reducers/initializeContent/initializeContent'
import setContentReducer from './reducers/setContent/setContent'
import setContentErrorRducer from './reducers/setContentError/setContentError'
import resetContentReducer from './reducers/resetContent/resetContent'
import setSelectedReducer from './reducers/setSelected/setSelected'
import setOnMoveReducer from './reducers/setOnMove/setOnMove'
import setTargetElementReducer from './reducers/setTargetElement/setTargetElement'
import setTreeLocationReducer from './reducers/setTreeLocation/setTreeLocation'
import setDisplayTypeReducer from './reducers/setDisplayType/setDisplayType'
import setSortReducer from './reducers/setSort/setSort'
import setFilterReducer from './reducers/setFilter/setFilter'
import setSearchReducer from './reducers/setSearch/setSearch'
import downloadElementsReducer from './reducers/downloadElements/downloadElements'
import addFolderReducer from './reducers/addFolder/addFolder'
import uploadFileReducer from './reducers/uploadFile/uploadFile'
import updateContentReducer from './reducers/updateContent/updateContent'
import moveToTrashReducer from './reducers/moveToTrash/moveToTrash'
import restoreFromTrashReducer from './reducers/restoreFromTrash/restoreFromTrash'
import deleteForeverReducer from './reducers/deleteForever/deleteForever'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {
        initializeContent: initializeContentReducer,
        setContent: setContentReducer,
        setContentError: setContentErrorRducer,
        resetContent: resetContentReducer,
        setSelected: setSelectedReducer,
        setOnMove: setOnMoveReducer,
        setTargetElement: setTargetElementReducer,
        setTreeLocation: setTreeLocationReducer,
        setDisplayType: setDisplayTypeReducer,
        setSort: setSortReducer,
        setFilter: setFilterReducer,
        setSearch: setSearchReducer,
        downloadElements: downloadElementsReducer,
        addFolder: addFolderReducer,
        uploadFile: uploadFileReducer,
        updateContent: updateContentReducer,
        moveToTrash: moveToTrashReducer,
        restoreFromTrash: restoreFromTrashReducer,
        deleteForever: deleteForeverReducer
    }
})

export default contentSlice.reducer

export const {
    initializeContent, setContent, setContentError, resetContent,
    setSelected, setOnMove, setTargetElement, setTreeLocation, setDisplayType,
    setSort, setFilter, setSearch, downloadElements, addFolder, uploadFile,
    updateContent, moveToTrash, restoreFromTrash, deleteForever

} = contentSlice.actions