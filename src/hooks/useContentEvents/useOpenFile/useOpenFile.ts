import { useSelector, useDispatch } from '../../../store/store'
import { useNavigate } from 'react-router-dom'
import { showWindow } from '../../../store/features/windowSlice/windowSlice'
import getIsTouchScreen from '../functions/getIsTouchScreen/getIsTouchScreen'

const useOpenFile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isInTrash = useSelector(state => state.content.displayType) === 'TRASH'
    const projectId = useSelector(state => state.user.status === 'READY' ? state.user.project.selectedProject.id : null)

    const openFile = (id: number, mobile?: boolean) => {
        if (!mobile) if (getIsTouchScreen()) return

        if (isInTrash) return dispatch(showWindow('CAN_NOT_OPEN_IN_TRASH'))

        if (projectId === null) return

        navigate('/file/' + projectId + '/' + id.toString())
    }

    return openFile
}

export default useOpenFile