/**
 * deleteForever reducer of the redux contentSlice
 * 
 * It is used to delete specific folders and files fro the loadedContent (both content and trash). 
 * It recives the list of all foleders and files IDs and removes them from content and trash. 
 * 
 * Assumptions:
 * - reducer gets as payload the list of all elements to delete, whitch means it does't remove nested
 *      elements. If folder A contains folder B, and only folder A is in the payload, then only folder
 *      A will be deleted. The functionality of creating the full array of elements to delete is implemented
 *      on the server. 
 */

import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType } from '../../contentSlice.types'

const deleteForever = (state: contentStateType, action: PayloadAction<{ folders: number[], files: number[] }>) => {
    if (state.loadedContent.status !== 'READY') return

    // Preparing data:
    const data = action.payload
    let currentContent = { ...state.loadedContent }

    // Finding and removing folders from all possible locations:
    data.folders.forEach(folderId => {
        let found = currentContent.content.folders.find(f => f.id === folderId)
        if (found) return currentContent.content.folders.splice(currentContent.content.folders.indexOf(found), 1)

        found = currentContent.trash.view.folders.find(f => f.id === folderId)
        if (found) return currentContent.trash.view.folders.splice(currentContent.trash.view.folders.indexOf(found), 1)

        found = currentContent.trash.contained.folders.find(f => f.id === folderId)
        if (found) currentContent.trash.contained.folders.splice(currentContent.trash.contained.folders.indexOf(found), 1)
    })

    // Finding and removing files from all possible locations:
    data.files.forEach(fileId => {
        let found = currentContent.content.files.find(f => f.id === fileId)
        if (found) return currentContent.content.files.splice(currentContent.content.files.indexOf(found), 1)

        found = currentContent.trash.view.files.find(f => f.id === fileId)
        if (found) return currentContent.trash.view.files.splice(currentContent.trash.view.files.indexOf(found), 1)

        found = currentContent.trash.contained.files.find(f => f.id === fileId)
        if (found) currentContent.trash.contained.files.splice(currentContent.trash.contained.files.indexOf(found), 1)
    })

    // Setting the new state:
    state.loadedContent = { ...currentContent }
}

export default deleteForever