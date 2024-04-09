import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

import getCurrentPath from '../../../../../functions/getCurrentPath/getCurrentPath'
import getCurrentContent from '../../../../../functions/getCurrentContent/getCurrentContent'
import getTrashContent from '../../../../../functions/getTrashContent/getTrashContent'

const setTreeLocation = (state: contentStateType, action: PayloadAction<number>) => {
    if (state.loadedContent.status !== 'READY') return

    if (state.displayType === 'TREE') {
        const newPath = getCurrentPath(state.loadedContent.content.folders, action.payload)

        if (!newPath) {
            state.loadedContent = { status: 'ERROR', error: 'Wystąpił błąd!' }
            return
        }

        state.currentPath = newPath
        state.currentFolder = getCurrentContent(state.loadedContent.content, action.payload)

    } else if (state.displayType === 'FILES') {
        state.currentPath = []
        state.currentFolder = {
            folders: [],
            files: state.loadedContent.content.files.filter(f => !f.isInTrash)
        }

    } else {
        state.currentPath = []
        state.currentFolder = getTrashContent(state.loadedContent.content)
    }
}

export default setTreeLocation