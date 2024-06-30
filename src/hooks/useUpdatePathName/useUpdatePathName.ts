import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import { useNavigate, useLocation } from 'react-router-dom'
import { setDisplayType, setTreeLocation } from '../../store/features/contentSlice/contentSlice'
import getDataFromPathname from '../../functions/getDataFromPathname/getDataFromPathname'

const useUpdatePathName = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const contentStatus = useSelector(state => state.content.loadedContent.status)
    const currentFolder = useSelector(state => state.content.currentFolder)
    const project = useSelector(state => state.user.status === 'READY' ? state.user.project.selectedProject : null)
    const path = useSelector(state => state.content.currentPath)
    const displayType = useSelector(state => state.content.displayType)

    useEffect(() => {
        if (contentStatus !== 'READY') return

        let newPathName = displayType === 'TREE' ? '/project/' : displayType === 'FILES' ? '/files/' : '/trash/'

        if (project) newPathName += project.id

        if (displayType === 'TREE') {
            if (path.length > 0) {
                newPathName += '/'

                if (Number.isNaN(path[path.length - 1].id)) newPathName += 'not-found'
                else newPathName += path[path.length - 1].id

            } else newPathName += '/home'
        }

        if (newPathName !== location.pathname) navigate(newPathName)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentFolder])

    useEffect(() => {
        const pathData = getDataFromPathname(location.pathname)

        if (displayType !== pathData.displayType) {
            dispatch(setDisplayType(pathData.displayType || 'TREE'))
            dispatch(setTreeLocation(-1))
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])
}

export default useUpdatePathName