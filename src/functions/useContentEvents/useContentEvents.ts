import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import { setSelected } from '../../store/features/contentSlice/contentSlice'

import getRangeOfElements from '../getRangeOfElements/getRangeOfElements'
import click from './click/click'
import controlClick from './controlClick/controlClick'

import { ElementType, selectedType } from '../../store/features/contentSlice/contentSlice.types'

const useContentEvents = () => {
    const currentFolder = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)
    const currentPath = useSelector(state => state.content.currentPath)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSelected({ selectionStart: null }))

    }, [dispatch, currentPath])

    const select = (event: React.MouseEvent<HTMLElement>, type: ElementType, id: number) => {
        let newSelected: selectedType = { ...selected }

        if (event.shiftKey) {
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
                const range = getRangeOfElements({
                    currentFolder: { ...currentFolder },
                    first: selected.selectionStart,
                    last: { type, id }
                })

                newSelected = { ...newSelected, ...range }
            }

        } else if (event.ctrlKey) dispatch(setSelected(controlClick({ ...selected }, type, id)))
        else dispatch(setSelected(click(type, id)))

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