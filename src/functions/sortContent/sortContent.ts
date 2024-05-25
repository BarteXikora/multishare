import { contentDisplayType, sortType } from '../../store/features/contentSlice/contentSlice.types'
import getFileTypeName from '../getFileTypeName/getFileTypeName'

const sortByName = (content: contentDisplayType): contentDisplayType => {
    const { folders, files } = content

    content.folders = folders.sort((a, b) => a.name.localeCompare(b.name))
    content.files = files.sort((a, b) => a.name.localeCompare(b.name))

    return content
}

const sortByDate = (content: contentDisplayType): contentDisplayType => {
    const { folders, files } = content

    content.folders = folders.sort((a, b) => {
        const dateA = a.details.lastModificationDate
        const dateB = a.details.lastModificationDate

        if (!dateA || !dateB) return 0

        return new Date(dateB).getTime() - new Date(dateA).getTime()
    })

    content.files = files.sort((a, b) => {
        const dateA = a.details.lastModificationDate
        const dateB = b.details.lastModificationDate

        if (!dateA || !dateB) return 0

        return new Date(dateB).getTime() - new Date(dateA).getTime()
    })

    return content
}

const sortByType = (content: contentDisplayType): contentDisplayType => {
    const { files } = content

    content.files = files.sort((a, b) => getFileTypeName(a.extension).localeCompare(getFileTypeName(b.extension)))

    return content
}

const reverse = (content: contentDisplayType): contentDisplayType => {
    return { folders: content.folders.reverse(), files: content.files.reverse() }
}

const sortContent = (content: contentDisplayType, sort: sortType): contentDisplayType => {
    content = sortByName(content)

    if (sort.sortBy === 'DATE') content = sortByDate(content)
    if (sort.sortBy === 'TYPE') content = sortByType(content)

    if (sort.method === 'DESC') content = reverse(content)

    return content
}

export default sortContent