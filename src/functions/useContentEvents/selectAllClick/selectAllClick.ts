import { contentDisplayType, selectedType } from '../../../store/features/contentSlice/contentSlice.types'

const selectAllClick = (content: contentDisplayType, selected: selectedType, unselectAllOnSecondClick: boolean): selectedType => {
    const result: selectedType = { folders: [], files: [], selectionStart: null }

    if (content.folders.length > 0) {
        result.selectionStart = { type: 'FOLDER', id: content.folders[0].id }

        for (const folder of content.folders) result.folders.push(folder.id)
    }

    if (content.files.length > 0) {
        result.selectionStart = { type: 'FILE', id: content.files[0].id }

        for (const file of content.files) result.files.push(file.id)
    }

    return result
}

export default selectAllClick