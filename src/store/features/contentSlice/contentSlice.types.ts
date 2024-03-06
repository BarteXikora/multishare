export type ElementType = 'FOLDER' | 'FILE'

type loadedContentLoadingType = {
    status: 'LOADING'
}

type loadedContentReadyType = {
    status: 'READY'
    content: contentType
}

type loadedContentErrorType = {
    status: 'ERROR'
    error: string
}

export type loadedContentType = loadedContentLoadingType | loadedContentReadyType | loadedContentErrorType

export type projectType = {
    id: number,
    name: string
}

export type pathType = {
    id: number,
    name: string
}[]

export type folderDetailsType = {
    createdDate?: string,
    lastModificationDate?: string,
}

export type fileDetailsType = folderDetailsType & {
    fileSizeBites?: number
}

export type folderType = {
    id: number,
    name: string,
    content: contentType,
    details: folderDetailsType,
    star: boolean
}

export type folderDisplayType = {
    id: number,
    name: string,
    insideContent: { folders: number, files: number },
    details: folderDetailsType,
    star: boolean
}

export type fileType = {
    id: number,
    name: string,
    extension: string,
    details: fileDetailsType,
    star: boolean
}

export type contentType = {
    folders: folderType[],
    files: fileType[]
}

export type contentDisplayType = {
    folders: folderDisplayType[],
    files: fileType[]
}

export type selectedType = {
    files: number[],
    folders: number[],
    selectionStart: { type: 'FOLDER' | 'FILE', id: number } | null
}

export type initialStateType = {
    project: projectType,
    currentPath: pathType,
    loadedContent: loadedContentType,
    currentFolder: contentDisplayType,
    selected: selectedType
}