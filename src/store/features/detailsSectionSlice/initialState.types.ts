import { fileType, folderType } from '../contentSlice/contentSlice.types'

type contentEmptyType = {
    type: 'EMPTY'
}

type contentFolderType = {
    type: 'FOLDER'
    data: folderType
}

type contentFileType = {
    type: 'FILE',
    data: fileType
}

type contentMultipleType = {
    type: 'MULTIPLE',
    data: {
        folders?: folderType[]
        files?: fileType[]
    }
}

type contentType = contentEmptyType | contentFolderType | contentFileType | contentMultipleType

type initialStateType = {
    isShown: boolean
    content: contentType
}

export default initialStateType