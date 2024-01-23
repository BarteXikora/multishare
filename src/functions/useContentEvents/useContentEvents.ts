import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import { setSelected } from '../../store/features/contentSlice/contentSlice'

type ElementType = 'FOLDER' | 'FILE'

const useContentEvents = () => {
    const currentPath = useSelector(state => state.content.currentPath)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSelected({}))

    }, [dispatch, currentPath])

    const select = (
        event: React.MouseEvent<HTMLElement>,
        type: ElementType,
        id: number

    ) => {
        switch (type) {
            case 'FOLDER':
                dispatch(setSelected({ folders: [id] }))
                break

            case 'FILE':
                dispatch(setSelected({ files: [id] }))
                break

            default:
                return
        }
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