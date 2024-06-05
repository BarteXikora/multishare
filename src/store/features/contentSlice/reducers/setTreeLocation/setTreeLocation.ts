import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, selectedType } from '../../contentSlice.types'

import getCurrentPath from '../../../../../functions/getCurrentPath/getCurrentPath'
import getCurrentContent from '../../../../../functions/getCurrentContent/getCurrentContent'
import getTrashContent from '../../../../../functions/getTrashContent/getTrashContent'
import sortContent from '../../../../../functions/sortContent/sortContent'
import getAllDisplayContent from '../../../../../functions/getAllDisplayContent/getAllDisplayContent'
import filterContent from '../../../../../functions/filterContent/filterContent'

const emptySelect: selectedType = { folders: [], files: [], selectionStart: null }

const setTreeLocation = (state: contentStateType, action: PayloadAction<number>) => {
    if (state.loadedContent.status !== 'READY') return

    if (state.displayType !== 'TRASH') {
        if (!state.filter.time && !state.filter.type && !state.filter.star) {
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

                state.currentFolder = sortContent(getCurrentContent(state.loadedContent.content, action.payload), state.sort)

            } else if (state.displayType === 'FILES') {
                state.currentPath = []
                state.currentFolder = sortContent({ folders: [], files: state.loadedContent.content.files }, state.sort)
                state.selected = emptySelect
            }
        } else {
            state.currentPath = []
            state.currentFolder = sortContent(filterContent(getAllDisplayContent(state.loadedContent.content), state.filter), state.sort)
            state.selected = emptySelect
        }

    } else {
        state.currentPath = []
        state.currentFolder = sortContent(filterContent(getTrashContent(state.loadedContent.trash), state.filter), state.sort)
        state.selected = emptySelect
    }
}

export default setTreeLocation