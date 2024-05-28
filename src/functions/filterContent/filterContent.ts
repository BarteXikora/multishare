import { contentDisplayType, filterType } from '../../store/features/contentSlice/contentSlice.types'
import getFileType from '../fileTypes/getFileType/getFileType'

const filterByType = (content: contentDisplayType, filter: filterType): contentDisplayType => {
    if (filter.type === 'FOLDER') return { folders: content.folders, files: [] }

    return { folders: [], files: content.files.filter(f => getFileType(f.extension) === filter.type) }
}

const filterContent = (content: contentDisplayType, filter: filterType): contentDisplayType => {
    let currentContent = JSON.parse(JSON.stringify(content))

    // if (filter.time) filter by time

    if (filter.type) currentContent = filterByType(currentContent, filter)

    return currentContent
}

export default filterContent