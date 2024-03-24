import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

import getCurrentPath from '../../../../../functions/getCurrentPath/getCurrentPath'
import getCurrentContent from '../../../../../functions/getCurrentContent/getCurrentContent'

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

    } else {
        state.currentPath = []
        state.currentFolder = {
            folders: [],
            files: state.loadedContent.content.files
        }
    }
}

export default setTreeLocation