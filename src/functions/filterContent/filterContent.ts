/**
 * filterContent function
 * 
 * It recives content and filters objects and returns filtered content. 
 * It is used in the setTreeLocation reducer.
 */

import { contentDisplayType, filterType } from '../../store/features/contentSlice/contentSlice.types'
import getFileType from '../fileTypes/getFileType/getFileType'
import getTimeRangeDays from '../getTimeRangeDays/getTimeRangeDays'

// Hadnling filtering by star; returns only elements marked with star:
const filterByStar = (content: contentDisplayType): contentDisplayType => {
    return {
        folders: content.folders.filter(f => f.star),
        files: content.files.filter(f => f.star)
    }
}

// Handling filtering by date range:
const flterByTime = (content: contentDisplayType, filter: filterType): contentDisplayType => {
    if (!filter.time) return content

    // Preparing date range using data from filter object:
    let dateRange: { from: Date, to: Date }

    if ('lastDays' in filter.time) dateRange = getTimeRangeDays(filter.time.lastDays)
    else dateRange = { from: filter.time.from || new Date(), to: filter.time.to || new Date() }

    // Filtering folders array:
    content.folders = content.folders.filter(f =>
        f.details.lastModificationDate && (
            new Date(f.details.lastModificationDate) < dateRange.to
            &&
            new Date(f.details.lastModificationDate) > dateRange.from
        )
    )

    // Filtering files array:
    content.files = content.files.filter(f =>
        f.details.lastModificationDate && (
            new Date(f.details.lastModificationDate) < dateRange.to
            &&
            new Date(f.details.lastModificationDate) > dateRange.from
        )
    )

    return content
}

// Filtering by element type:
const filterByType = (content: contentDisplayType, filter: filterType): contentDisplayType => {
    if (filter.type === 'FOLDER') return { folders: content.folders, files: [] }

    return { folders: [], files: content.files.filter(f => getFileType(f.extension) === filter.type) }
}

// The function:
const filterContent = (content: contentDisplayType, filter: filterType): contentDisplayType => {

    // Creating new content object:
    let currentContent = JSON.parse(JSON.stringify(content))

    // Applying filters:
    if (filter.star) currentContent = filterByStar(currentContent)

    if (filter.time) currentContent = flterByTime(currentContent, filter)

    if (filter.type) currentContent = filterByType(currentContent, filter)

    // Returning filtered content:
    return currentContent
}

export default filterContent