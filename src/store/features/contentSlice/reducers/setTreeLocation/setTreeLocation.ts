import { PayloadAction } from '@reduxjs/toolkit'
import { initialStateType } from '../../contentSlice.types'
import getPathAndContent from '../../../../../functions/getPathAndContent/getPathAndContent'

const setTreeLocation = (state: initialStateType, action: PayloadAction<number>) => {
    if (action.payload === -1) {
        state.currentPath = []
        state.currentFolder = state.loadedContent && {
            folders: state.loadedContent.folders?.map(f => {
                return ({
                    ...f,
                    insideContent: {
                        folders: (f.content && f.content.folders) ? f.content.folders.length : 0,
                        files: (f.content && f.content.files) ? f.content.files.length : 0
                    }
                })
            }),
            files: state.loadedContent.files
        }

    } else {
        const { path, content } = getPathAndContent(state.loadedContent, action.payload)

        state.currentPath = path
        state.currentFolder = content
    }
}

export default setTreeLocation