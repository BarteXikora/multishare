export type uploadFileStatusType = 'WAITING' | 'UPLOADING' | 'DONE'

export type addUploadFileType = {
    name: string,
    extension: string,
    parentFolder: number,
}

export type changeStatusType = {
    id: string,
    status: uploadFileStatusType
}

export type uploadFileType = addUploadFileType & changeStatusType

export type uploadListStateType = uploadFileType[]
