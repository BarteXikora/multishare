import { elementType, contentDisplayType } from '../../store/features/contentSlice/contentSlice.types'

type flatElement = { type: elementType, id: number }

type getRangeOfElementsType = {
    currentFolder: contentDisplayType
    first: flatElement
    last: flatElement
}

type getRangeOfElementsResultType = {
    folders: number[]
    files: number[]
}

const getRangeOfElements = ({ currentFolder, first, last }: getRangeOfElementsType): getRangeOfElementsResultType => {
    const flatContent: flatElement[] = []

    currentFolder.folders.forEach(folder => flatContent.push({ type: 'FOLDER', id: folder.id }))
    currentFolder.files.forEach(file => flatContent.push({ type: 'FILE', id: file.id }))


    let firstIndex = flatContent.findIndex(element => element.type === first.type && element.id === first.id)
    let lastIndex = flatContent.findIndex(element => element.type === last.type && element.id === last.id)

    if (firstIndex === -1 || lastIndex === -1) return { folders: [], files: [] }

    if (lastIndex < firstIndex) {
        const _last = lastIndex

        lastIndex = firstIndex
        firstIndex = _last
    }

    const elementsOfRange = flatContent.slice(firstIndex, lastIndex + 1)

    const result: getRangeOfElementsResultType = { folders: [], files: [] }

    elementsOfRange.forEach(element =>
        element.type === 'FOLDER' ?
            result.folders = [...result.folders, element.id]
            :
            result.files = [...result.files, element.id]
    )

    return result
}

export default getRangeOfElements