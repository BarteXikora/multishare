import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import setInLocalStorage from './setInLocalStorage/setInLocalStorage'
import getFromLocalStorage from './getFromLocalStorage/getFromLocalStorage'
import { contentViewStyleType } from '../../store/features/viewSlice/initialState.types'
import { setContentViewStyle } from '../../store/features/viewSlice/viewSlice'

const useLocalStorage = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.user)
    const viewStyle = useSelector(state => state.view.contentViewStyle)

    useEffect(() => {
        if (user.status === 'READY') setInLocalStorage('projectId', user.project.selectedProject.id)

    }, [user])

    useEffect(() => {
        const storedViewStyle = getFromLocalStorage<contentViewStyleType>('viewStyle')

        if (storedViewStyle) dispatch(setContentViewStyle(storedViewStyle))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => setInLocalStorage('viewStyle', viewStyle), [viewStyle])
}

export default useLocalStorage