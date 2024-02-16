export type ElementType = 'FOLDER' | 'FILE'

export type projectType = {
    id: number,
    name: string
}

export type pathType = {
    id: number,
    name: string
}[]

export type folderDetailsType = {
    createdDate?: Date,
    lastModificationDate?: Date,
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

export type contentType = false | {
    folders?: folderType[],
    files?: fileType[]
}

export type contentDisplayType = false | {
    folders?: folderDisplayType[],
    files?: fileType[]
}

export type selectedType = {
    files?: number[],
    folders?: number[],
    selectionStart: { type: 'FOLDER' | 'FILE', id: number } | null
}

export type initialStateType = {
    project: projectType,
    currentPath: pathType,
    loadedContent: contentType,
    currentFolder: contentDisplayType,
    selected: selectedType
}