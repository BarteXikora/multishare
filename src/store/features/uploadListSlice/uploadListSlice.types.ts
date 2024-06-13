export type uploadFileStatusType = 'WAITING' | 'UPLOADING' | 'DONE'

export type uploadFileType = {
    id: string,
    name: string,
    extension: string,
    parentFolder: number,
    status: uploadFileStatusType
}

export type uploadListStateType = uploadFileType[]
