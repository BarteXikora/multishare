import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

import getCurrentPath from '../../../../../functions/getCurrentPath/getCurrentPath'

const setTreeLocation = (state: contentStateType, action: PayloadAction<number>) => {
    if (state.loadedContent.status !== 'READY') return

    const newPath = getCurrentPath(state.loadedContent.content.folders, action.payload)

    if (!newPath) {
        state.loadedContent = { status: 'ERROR', error: 'Wystąpił błąd!' }
        return
    }

    state.currentPath = newPath
    // state.currentFolder = getCurrentContent(action.payload)
}

export default setTreeLocation