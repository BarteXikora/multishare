import { contentDisplayType, filterType } from '../../store/features/contentSlice/contentSlice.types'
import getFileType from '../fileTypes/getFileType/getFileType'
import getTimeRangeDays from '../getTimeRangeDays/getTimeRangeDays'

const filterByStar = (content: contentDisplayType, filter: filterType): contentDisplayType => {
    return {
        folders: content.folders.filter(f => f.star),
        files: content.files.filter(f => f.star)
    }
}

const flterByTime = (content: contentDisplayType, filter: filterType): contentDisplayType => {
    if (!filter.time) return content

    let dateRange: { from: Date, to: Date }

    if ('lastDays' in filter.time) dateRange = getTimeRangeDays(filter.time.lastDays)
    else dateRange = { from: filter.time.from || new Date(), to: filter.time.to || new Date() }

    content.folders = content.folders.filter(f =>
        f.details.lastModificationDate && (
            new Date(f.details.lastModificationDate) < dateRange.to
            &&
            new Date(f.details.lastModificationDate) > dateRange.from
        )
    )

    content.files = content.files.filter(f =>
        f.details.lastModificationDate && (
            new Date(f.details.lastModificationDate) < dateRange.to
            &&
            new Date(f.details.lastModificationDate) > dateRange.from
        )
    )

    return content
}

const filterByType = (content: contentDisplayType, filter: filterType): contentDisplayType => {
    if (filter.type === 'FOLDER') return { folders: content.folders, files: [] }

    return { folders: [], files: content.files.filter(f => getFileType(f.extension) === filter.type) }
}

const filterContent = (content: contentDisplayType, filter: filterType): contentDisplayType => {
    let currentContent = JSON.parse(JSON.stringify(content))

    if (filter.star) currentContent = filterByStar(currentContent, filter)

    if (filter.time) currentContent = flterByTime(currentContent, filter)

    if (filter.type) currentContent = filterByType(currentContent, filter)

    return currentContent
}

export default filterContent