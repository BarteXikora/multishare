export type uploadFileStatusType = 'WAITING' | 'UPLOADING' | 'DONE'

export type addUploadFileType = {
    name: string,
    extension: string,
    parentFolder: number,
}

export type uploadFileType = addUploadFileType & {
    id: string,
    status: uploadFileStatusType
}

export type uploadListStateType = uploadFileType[]
