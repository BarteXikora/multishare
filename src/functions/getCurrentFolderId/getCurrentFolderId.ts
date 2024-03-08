import { pathType } from '../../store/features/contentSlice/contentSlice.types'

const getCurrentFolderId = (path: pathType) => {
    if (path.length === 0) return -1
    return path[path.length - 1].id
}

export default getCurrentFolderId