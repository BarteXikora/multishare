import { contentDisplayType, sortType } from '../../store/features/contentSlice/contentSlice.types'
import getFileTypeName from '../getFileTypeName/getFileTypeName'

const sortByName = (content: contentDisplayType): contentDisplayType => {
    const { folders, files } = content

    content.folders = folders.sort((a, b) => a.name.localeCompare(b.name))
    content.files = files.sort((a, b) => a.name.localeCompare(b.name))

    return { ...content }
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

    return { ...content }
}

const sortByType = (content: contentDisplayType): contentDisplayType => {
    const { files } = content

    content.files = files.sort((a, b) => getFileTypeName(a.extension).localeCompare(getFileTypeName(b.extension)))

    return { ...content }
}

const reverse = (content: contentDisplayType): contentDisplayType => {
    return { folders: content.folders.reverse(), files: [...content.files.reverse()] }
}

const sortContent = (content: contentDisplayType, sort: sortType): contentDisplayType => {
    let currentContent = JSON.parse(JSON.stringify(content))

    currentContent = sortByName(currentContent)

    if (sort.sortBy === 'DATE') currentContent = sortByDate(currentContent)
    if (sort.sortBy === 'TYPE') currentContent = sortByType(currentContent)

    if (sort.method === 'DESC') currentContent = reverse(currentContent)

    return currentContent
}

export default sortContent