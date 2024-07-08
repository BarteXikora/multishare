/**
 * getAllDisplayContent function
 * 
 * It recices project content of type contentType and returns content of type contentDisplayType. It
 * adds insideContent value to folders objects. It is used in the setTreeLocation reducer. 
 */

import { contentType, contentDisplayType } from '../../store/features/contentSlice/contentSlice.types'
import getInsideContent from '../getInsideContent/getInsideContent'

const getAllDisplayContent = (content: contentType): contentDisplayType => {

    // Creatding the new content object with files:
    const newContent: contentDisplayType = { folders: [], files: content.files }

    // Filling folders with insideContent:
    content.folders.forEach(folder => newContent.folders.push({
        ...folder, insideContent: getInsideContent(content, folder.id)
    }))

    // Returning the new content: 
    return newContent
}

export default getAllDisplayContent