import { fileType, folderDisplayType } from '../contentSlice/contentSlice.types'

export type multipleDataType = {
    folders: folderDisplayType[]
    files: fileType[]
}

type contentEmptyType = {
    type: 'EMPTY'
}

type contentFolderType = {
    type: 'FOLDER'
    data: folderDisplayType
}

type contentFileType = {
    type: 'FILE',
    data: fileType
}

type contentMultipleType = {
    type: 'MULTIPLE',
    data: multipleDataType
}

export type contentType = contentEmptyType | contentFolderType | contentFileType | contentMultipleType

type initialStateType = {
    isShown: boolean
    content: contentType
}

export default initialStateType