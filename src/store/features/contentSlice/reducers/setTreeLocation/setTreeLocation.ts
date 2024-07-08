/**
 * setTreeLocation reducer of the redux contentSlice
 * 
 * It recives the folder ID as the payload and sets the folders tree location to the recived
 * point. It sets the path and currentContent based on folder ID and display type.
 * 
 * Logic in order:
 * 
 * - for display type of TRASH it gets trash view content, applies search, filters and sort and empties
 *      path and selection.
 * - for display type other than TRASH (TREE, or FILES) it checks if there is any search string set. If there
 *      is, it gets content, applies search, filters, sort, and empties path and selection.
 * - if search is empty, than it checks if there are no filters set. If there are, it gets content, applies
 *      filters, sort, and empties path and selection.
 * - if there are not filters, it checks display type again. If it is set to TREE it gets content from given
 *      in payload location, applies sort. It also checks if the path did change. If it did, than it sets
 *      the new path and empties the selection.
 * - if display type is set to FILES it gets all content files, applies sort and empties path and selection. 
 */


import { PayloadAction } from '@reduxjs/toolkit'
import { contentStateType, selectedType } from '../../contentSlice.types'

import getCurrentPath from '../../../../../functions/getCurrentPath/getCurrentPath'
import getCurrentContent from '../../../../../functions/getCurrentContent/getCurrentContent'
import getTrashContent from '../../../../../functions/getTrashContent/getTrashContent'
import sortContent from '../../../../../functions/sortContent/sortContent'
import getAllDisplayContent from '../../../../../functions/getAllDisplayContent/getAllDisplayContent'
import filterContent from '../../../../../functions/filterContent/filterContent'
import searchContent from '../../../../../functions/searchContent/searchContent'

const emptySelect: selectedType = { folders: [], files: [], selectionStart: null }

const setTreeLocation = (state: contentStateType, action: PayloadAction<number>) => {
    if (state.loadedContent.status !== 'READY') return

    // For display type different than TRASH (TREE or FILES):
    if (state.displayType !== 'TRASH') {

        // Setting current content to search results if search is not empty. The content is also
        // filtered and sorted. Setting path to an empty array: 
        if (state.search !== '') {
            state.currentPath = []
            state.selected = emptySelect

            state.currentFolder = sortContent(
                filterContent(
                    searchContent(
                        getAllDisplayContent(state.loadedContent.content),
                        state.search),
                    state.filter),
                state.sort
            )
        }

        // (if no search) For no filters:
        else if (!state.filter.time && !state.filter.type && !state.filter.star) {

            // Setting the tree content to the recived location if display type is TREE:
            if (state.displayType === 'TREE') {
                const newPath = getCurrentPath(state.loadedContent.content.folders, action.payload)

                if (!newPath) {
                    state.loadedContent = { status: 'ERROR', error: 'Wystąpił błąd!' }
                    return
                }

                // Checking if location has changed:
                let isLocationDifferent = false
                if (action.payload === -1) {
                    if (state.currentPath.length !== 0) isLocationDifferent = true

                }
                else if (state.currentPath[state.currentPath.length - 1]?.id !== action.payload) isLocationDifferent = true

                // Setting the new path and emptying the selection only if location has changed: 
                if (isLocationDifferent) {
                    state.currentPath = newPath
                    state.selected = emptySelect
                }

                // Setting the new currentContent:
                state.currentFolder = sortContent(getCurrentContent(state.loadedContent.content, action.payload), state.sort)
            }

            // Setting the new curent content and emptying the path and selection if display type is FILES:
            else if (state.displayType === 'FILES') {
                state.currentPath = []
                state.currentFolder = sortContent({ folders: [], files: state.loadedContent.content.files }, state.sort)
                state.selected = emptySelect
            }

            // (if no search, but filters) Setting the new curent content and emptying the path and selection:
        } else {
            state.currentPath = []
            state.currentFolder = sortContent(filterContent(getAllDisplayContent(state.loadedContent.content), state.filter), state.sort)
            state.selected = emptySelect
        }

        // For TRASH - setting the new curent content and emptying the path and selection:
    } else {
        state.currentPath = []
        state.currentFolder = sortContent(filterContent(searchContent(getTrashContent(state.loadedContent.trash), state.search), state.filter), state.sort)
        state.selected = emptySelect
    }
}

export default setTreeLocation