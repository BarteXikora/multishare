import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import { setSelected } from '../../store/features/contentSlice/contentSlice'

import { ElementType, selectedType, contentDisplayType } from '../../store/features/contentSlice/contentSlice.types'

const getRangeOfElements =
    (
        currentFolder: contentDisplayType,
        first: { type: ElementType, id: number },
        last: { type: ElementType, id: number }

    ): { folders?: number[], files?: number[] } => {

        const flatContent: { type: ElementType, id: number }[] = []

        if (currentFolder) {
            if (currentFolder.folders)
                currentFolder.folders.forEach(folder => flatContent.push({ type: 'FOLDER', id: folder.id }))

            if (currentFolder.files)
                currentFolder.files.forEach(file => flatContent.push({ type: 'FILE', id: file.id }))
        }

        let firstIndex = flatContent.findIndex(element => element.type === first.type && element.id === first.id)
        let lastIndex = flatContent.findIndex(element => element.type === last.type && element.id === last.id)

        if (firstIndex === -1 || lastIndex === -1) return {}

        if (lastIndex < firstIndex) {
            const _last = lastIndex

            lastIndex = firstIndex
            firstIndex = _last
        }

        const elementsOfRange = flatContent.slice(firstIndex, lastIndex + 1)

        const result: { folders: number[], files: number[] } = { folders: [], files: [] }

        elementsOfRange.forEach(element => element.type === 'FOLDER' ? result.folders.push(element.id) : result.files.push(element.id))

        return result
    }

const useContentEvents = () => {
    const currentFolder = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)
    const currentPath = useSelector(state => state.content.currentPath)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSelected({ selectionStart: null }))

    }, [dispatch, currentPath])

    const select = (
        event: React.MouseEvent<HTMLElement>,
        type: ElementType,
        id: number

    ) => {
        let newSelected: selectedType = { selectionStart: null }

        if (event.shiftKey) {
            newSelected = { ...selected }

            if (selected.selectionStart === null) {
                switch (type) {
                    case 'FOLDER':
                        newSelected.folders = [id]
                        newSelected.selectionStart = { type: 'FOLDER', id }

                        break

                    case 'FILE':
                        newSelected.files = [id]
                        newSelected.selectionStart = { type: 'FILE', id }
                }

            } else {
                const range = getRangeOfElements({ ...currentFolder }, selected.selectionStart, { type, id })

                newSelected = { ...newSelected, ...range }
            }

        } else if (event.ctrlKey) {
            newSelected = { ...selected }

            switch (type) {
                case 'FOLDER':
                    if (!newSelected.folders) newSelected.folders = []

                    if (newSelected.folders.includes(id)) newSelected.folders = newSelected.folders.filter(folder => folder !== id)
                    else newSelected.folders = [...newSelected.folders, id]

                    newSelected.selectionStart = { type: 'FOLDER', id }

                    break

                case 'FILE':
                    if (!newSelected.files) newSelected.files = []

                    if (newSelected.files.includes(id)) newSelected.files = newSelected.files.filter(file => file !== id)
                    else newSelected.files = [...newSelected.files, id]

                    newSelected.selectionStart = { type: 'FILE', id }
            }

        } else {
            switch (type) {
                case 'FOLDER':
                    newSelected.folders = [id]
                    newSelected.selectionStart = { type: 'FOLDER', id }

                    break

                case 'FILE':
                    newSelected.files = [id]
                    newSelected.selectionStart = { type: 'FILE', id }
            }
        }

        dispatch(setSelected(newSelected))
    }

    return {
        folderEvents: {
            onClick: (event: React.MouseEvent<HTMLElement>, folderId: number) => select(event, 'FOLDER', folderId),
        },

        filesEvents: {
            onClick: (event: React.MouseEvent<HTMLElement>, folderId: number) => select(event, 'FILE', folderId),
        }
    }
}

export default useContentEvents