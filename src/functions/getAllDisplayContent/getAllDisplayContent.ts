import { contentType, contentDisplayType } from '../../store/features/contentSlice/contentSlice.types'
import getInsideContent from '../getInsideContent/getInsideContent'

const getAllDisplayContent = (content: contentType): contentDisplayType => {
    const newContent: contentDisplayType = { folders: [], files: content.files }

    content.folders.forEach(folder => newContent.folders.push({
        ...folder, insideContent: getInsideContent(content, folder.id)
    }))

    return newContent
}

export default getAllDisplayContent