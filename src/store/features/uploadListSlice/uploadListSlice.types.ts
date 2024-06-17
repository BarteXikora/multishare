export type uploadFileStatusType = 'WAITING' | 'UPLOADING' | 'DONE'

export type changeStatusType = {
    uploadId: string
    status: uploadFileStatusType
}

export type uploadFileType = {
    uploadId: string
    name: string
    extension: string
    parentFolder: number
    status: uploadFileStatusType
    file: File
}

export type uploadListStateType = uploadFileType[]
