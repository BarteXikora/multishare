import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import { setSelected } from '../../store/features/contentSlice/contentSlice'

import { selectedType } from '../../store/features/contentSlice/contentSlice.types'

type ElementType = 'FOLDER' | 'FILE'

const useContentEvents = () => {
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
            return

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