import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import { useNavigate, useLocation } from 'react-router-dom'
import { setDisplayType, setTreeLocation } from '../../store/features/contentSlice/contentSlice'

const useUpdatePathName = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const currentFolder = useSelector(state => state.content.currentFolder)
    const project = useSelector(state => state.project.selectedProject)
    const path = useSelector(state => state.content.currentPath)
    const displayType = useSelector(state => state.content.displayType)

    useEffect(() => {
        let newPathName = displayType === 'TREE' ? '/project/' : '/files/'

        if (project) newPathName += project.id

        if (displayType === 'TREE') {
            if (path.length > 0) {
                newPathName += '/'

                if (Number.isNaN(path[path.length - 1].id)) newPathName += 'not-found'
                else newPathName += path[path.length - 1].id

            } else newPathName += '/home'
        }

        navigate(newPathName)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentFolder])

    useEffect(() => {
        const pathType = /\/files/.test(location.pathname) ? 'FILES' : 'TREE'

        if (displayType !== pathType) {
            dispatch(setDisplayType(pathType))
            dispatch(setTreeLocation(-1))
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])
}

export default useUpdatePathName