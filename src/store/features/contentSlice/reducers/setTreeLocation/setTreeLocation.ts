import { PayloadAction } from '@reduxjs/toolkit'
import { initialStateType } from '../../contentSlice.types'
import getPathAndContent from '../../../../../functions/getPathAndContent/getPathAndContent'

const setTreeLocation = (state: initialStateType, action: PayloadAction<number>) => {
    if (state.loadedContent.status !== 'READY') return

    if (action.payload === -1) {
        state.currentPath = []
        state.currentFolder = {
            folders: state.loadedContent.content.folders.map(f => {
                return ({
                    ...f,
                    insideContent: {
                        folders: f.content.folders ? f.content.folders.length : 0,
                        files: f.content.files ? f.content.files.length : 0
                    }
                })
            }),
            files: state.loadedContent.content.files
        }

    } else {
        const { path, content } = getPathAndContent(state.loadedContent.content, action.payload)

        state.currentPath = path
        state.currentFolder = content
    }
}

export default setTreeLocation