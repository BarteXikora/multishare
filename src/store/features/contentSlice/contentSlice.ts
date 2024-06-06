import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

import initializeContentReducer from './reducers/initializeContent/initializeContent'
import setContentReducer from './reducers/setContent/setContent'
import setContentErrorRducer from './reducers/setContentError/setContentError'
import resetContentReducer from './reducers/resetContent/resetContent'
import setSelectedReducer from './reducers/setSelected/setSelected'
import setTreeLocationReducer from './reducers/setTreeLocation/setTreeLocation'
import setDisplayTypeReducer from './reducers/setDisplayType/setDisplayType'
import setSortReducer from './reducers/setSort/setSort'
import setFilterReducer from './reducers/setFilter/setFilter'
import setSearchReducer from './reducers/setSearch/setSearch'
import downloadElementsReducer from './reducers/downloadElements/downloadElements'
import addFolderReducer from './reducers/addFolder/addFolder'
import updateContentReducer from './reducers/updateContent/updateContent'
import uploadFilesReducer from './reducers/uploadFiles/uploadFiles'
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
        setTreeLocation: setTreeLocationReducer,
        setDisplayType: setDisplayTypeReducer,
        setSort: setSortReducer,
        setFilter: setFilterReducer,
        setSearch: setSearchReducer,
        downloadElements: downloadElementsReducer,
        addFolder: addFolderReducer,
        updateContent: updateContentReducer,
        uploadFiles: uploadFilesReducer,
        moveToTrash: moveToTrashReducer,
        restoreFromTrash: restoreFromTrashReducer,
        deleteForever: deleteForeverReducer
    }
})

export default contentSlice.reducer

export const {
    initializeContent, setContent, setContentError, resetContent,
    setSelected, setTreeLocation, setDisplayType, setSort, setFilter,
    setSearch, downloadElements, addFolder, updateContent, uploadFiles,
    moveToTrash, restoreFromTrash, deleteForever

} = contentSlice.actions