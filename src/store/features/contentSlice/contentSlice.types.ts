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
    parentFolder: number,
    name: string,
    extension: string,
    preview: string | false,
    details: fileDetailsType,
    star: boolean
}

export type contentType = {
    folders: folderType[],
    files: fileType[]
}

export type updateContentType = {
    folders: (Partial<folderType> & Required<Pick<folderType, 'id'>>)[],
    files: (Partial<fileType> & Required<Pick<fileType, 'id'>>)[]
}

export type trashType = {
    view: contentType,
    contained: contentType
}

export type contentDisplayType = {
    folders: folderDisplayType[],
    files: fileType[],
    notFound?: boolean
}

export type displayTypeType = 'TREE' | 'FILES' | 'TRASH'

export type sortType = {
    sortBy: 'NAME' | 'DATE' | 'TYPE',
    method: 'ASC' | 'DESC'
}

type filterTimeDaysType = { lastDays: number }

type filterTimeRangType = { from: Date | null, to: Date | null }

type filterTimeType = filterTimeDaysType | filterTimeRangType | null

export type filterTypeType = 'FOLDER' | 'IMAGE' | 'TEXT' | 'PDF' | 'WORD' |
    'CALCULATIONS' | 'SLIDES' | 'CODE' | 'SOUND' | 'FILM' | 'UNKNOWN' | null

export type filterType = {
    time: filterTimeType,
    type: filterTypeType,
    star: true | null
}

type loadedContentLoadingType = {
    status: 'LOADING'
}

type loadedContentReadyType = {
    status: 'READY'
    content: contentType
    trash: trashType
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
    sort: sortType,
    filter: filterType,
    currentFolder: contentDisplayType,
    currentPath: pathType[],
    selected: selectedType
}