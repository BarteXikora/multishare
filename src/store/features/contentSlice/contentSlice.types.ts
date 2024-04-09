export type elementType = 'FOLDER' | 'FILE'

export type folderDetailsType = {
    createdDate?: string,
    lastModificationDate?: string,
}

export type fileDetailsType = folderDetailsType & {
    fileSizeBites?: number
}

export type folderType = {
    id: number,
    parentFolder: number,
    name: string,
    details: folderDetailsType,
    star: boolean,
    isInTrash: boolean
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
    parentFolder: number,
    name: string,
    extension: string,
    preview: string | false,
    details: fileDetailsType,
    star: boolean,
    isInTrash: boolean
}

export type contentType = {
    folders: folderType[],
    files: fileType[]
}

export type contentDisplayType = {
    folders: folderDisplayType[],
    files: fileType[],
    notFound?: boolean
}

export type displayTypeType = 'TREE' | 'FILES' | 'TRASH'

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

export type pathType = {
    id: number,
    name: string,
    notFound?: boolean
}

export type selectedType = {
    files: number[],
    folders: number[],
    selectionStart: { type: elementType, id: number } | null
}

export type contentStateType = {
    loadedContent: loadedContentType,
    displayType: displayTypeType,
    currentFolder: contentDisplayType,
    currentPath: pathType[],
    selected: selectedType
}