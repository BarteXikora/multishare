/**
 * updateContent reducer of the redux contentSlice
 * 
 * It recives the update content objects array as payload and changes loaded content in the store. The recived array
 * contains objects with elements IDs and values to change. 
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, updateContentType } from '../../contentSlice.types'

const updateContent = (state: contentStateType, action: PayloadAction<updateContentType>) => {
    if (state.loadedContent.status !== 'READY') return

    // Preparing data:
    const data = action.payload
    let currentContent = { ...state.loadedContent.content }

    // Updating folders:
    data.folders.forEach(folder => {
        let found = currentContent.folders.find(f => f.id === folder.id)
        if (!found) return

        currentContent.folders.splice(currentContent.folders.indexOf(found), 1)

        found = { ...found, ...folder }

        currentContent.folders.push(found)
    })

    // Updateing files:
    data.files.forEach(file => {
        let found = currentContent.files.find(f => f.id === file.id)
        if (!found) return

        currentContent.files.splice(currentContent.files.indexOf(found), 1)

        found = { ...found, ...file }

        currentContent.files.push(found)
    })

    // Setting the new state:
    state.loadedContent.content = { ...currentContent }
}

export default updateContent