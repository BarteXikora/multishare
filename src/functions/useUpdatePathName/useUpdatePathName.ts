import { useEffect } from 'react'
import { useSelector } from '../../store/store'
import { useNavigate } from 'react-router-dom'

const useUpdatePathName = () => {
    const navigate = useNavigate()

    const currentFolder = useSelector(state => state.content.currentFolder)
    const project = useSelector(state => state.project.selectedProject)
    const path = useSelector(state => state.content.currentPath)

    useEffect(() => {
        let newPathName = '/project/'

        if (project) newPathName += project.id

        if (path.length > 0) newPathName += '/' + path[path.length - 1].id
        else newPathName += '/home'

        navigate(newPathName)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentFolder])
}

export default useUpdatePathName