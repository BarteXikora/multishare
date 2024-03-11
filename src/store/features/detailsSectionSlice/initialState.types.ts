import { fileType, folderDisplayType } from '../contentSlice/contentSlice.types'

export type multipleDataType = {
    folders: folderDisplayType[]
    files: fileType[]
}

export type contentEmptyType = {
    type: 'EMPTY'
}

export type contentFolderType = {
    type: 'FOLDER'
    data: folderDisplayType
}

export type contentFileType = {
    type: 'FILE',
    data: fileType
}

export type contentMultipleType = {
    type: 'MULTIPLE',
    data: multipleDataType
}

export type contentType = contentEmptyType | contentFolderType | contentFileType | contentMultipleType

export type detailsSectionStateType = {
    isShown: boolean
    content: contentType
}