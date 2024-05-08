import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, updateContentType } from '../../contentSlice.types'

const updateContent = (state: contentStateType, action: PayloadAction<updateContentType>) => {
    if (state.loadedContent.status !== 'READY') return

    const data = action.payload
    let currentContent = { ...state.loadedContent.content }

    data.folders.forEach(folder => {
        let found = currentContent.folders.find(f => f.id === folder.id)
        if (!found) return

        currentContent.folders.splice(currentContent.folders.indexOf(found), 1)

        found = { ...found, ...folder }

        currentContent.folders.push(found)
    })

    data.files.forEach(file => {
        let found = currentContent.files.find(f => f.id === file.id)
        if (!found) return

        currentContent.files.splice(currentContent.files.indexOf(found), 1)

        found = { ...found, ...file }

        currentContent.files.push(found)
    })

    state.loadedContent.content = { ...currentContent }
}

export default updateContent