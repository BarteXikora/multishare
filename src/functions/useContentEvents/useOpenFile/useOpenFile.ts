import { useSelector, useDispatch } from '../../../store/store'
import { useNavigate } from 'react-router-dom'
import { showWindow } from '../../../store/features/windowSlice/windowSlice'

const useOpenFile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isInTrash = useSelector(state => state.content.displayType) === 'TRASH'

    const openFile = (id: number) => {
        if (isInTrash) return dispatch(showWindow({
            title: 'Element znajduje się w koszu',
            content: 'CAN_NOT_OPEN_IN_TRASH'
        }))

        navigate('/file/' + id.toString())
    }

    return openFile
}

export default useOpenFile