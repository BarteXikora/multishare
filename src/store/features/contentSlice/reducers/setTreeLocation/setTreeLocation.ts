import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, selectedType } from '../../contentSlice.types'

import getCurrentPath from '../../../../../functions/getCurrentPath/getCurrentPath'
import getCurrentContent from '../../../../../functions/getCurrentContent/getCurrentContent'
import getTrashContent from '../../../../../functions/getTrashContent/getTrashContent'

const emptySelect: selectedType = { folders: [], files: [], selectionStart: null }

const setTreeLocation = (state: contentStateType, action: PayloadAction<number>) => {
    if (state.loadedContent.status !== 'READY') return

    if (state.displayType === 'TREE') {
        const newPath = getCurrentPath(state.loadedContent.content.folders, action.payload)

        if (!newPath) {
            state.loadedContent = { status: 'ERROR', error: 'Wystąpił błąd!' }
            return
        }

        let isLocationDifferent = false
        if (action.payload === -1) {
            if (state.currentPath.length !== 0) isLocationDifferent = true

        }
        else if (state.currentPath[state.currentPath.length - 1]?.id !== action.payload) isLocationDifferent = true

        if (isLocationDifferent) {
            state.currentPath = newPath
            state.selected = emptySelect
        }

        state.currentFolder = getCurrentContent(state.loadedContent.content, action.payload)

    } else if (state.displayType === 'FILES') {
        state.currentPath = []
        state.currentFolder = {
            folders: [],
            files: state.loadedContent.content.files
        }
        state.selected = emptySelect

    } else {
        state.currentPath = []
        state.currentFolder = getTrashContent(state.loadedContent.trash)
        state.selected = emptySelect
    }
}

export default setTreeLocation