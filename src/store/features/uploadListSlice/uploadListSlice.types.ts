/**
 * uploadListSlice types
 */

export type uploadFileStatusType = 'WAITING' | 'UPLOADING' | 'DONE'

export type changeStatusType = {
    uploadId: string
    status: uploadFileStatusType
}

export type changePercentType = {
    uploadId: string
    uploadPercent: number
}

export type uploadFileType = {
    uploadId: string
    name: string
    extension: string
    parentFolder: number
    status: uploadFileStatusType
    uploadPercent: number
    file: string
}

// The state type:
export type uploadListStateType = uploadFileType[]
