import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import setInLocalStorage from './setInLocalStorage/setInLocalStorage'
import getFromLocalStorage from './getFromLocalStorage/getFromLocalStorage'
import { contentViewStyleType } from '../../store/features/viewSlice/initialState.types'
import { setContentViewStyle } from '../../store/features/viewSlice/viewSlice'
import { sortType } from '../../store/features/contentSlice/contentSlice.types'
import { setSort } from '../../store/features/contentSlice/contentSlice'

const useLocalStorage = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.user)
    const viewStyle = useSelector(state => state.view.contentViewStyle)
    const sort = useSelector(state => state.content.sort)

    useEffect(() => {
        const storedViewStyle = getFromLocalStorage<contentViewStyleType>('viewStyle')
        if (storedViewStyle) dispatch(setContentViewStyle(storedViewStyle))

        const storedSort = getFromLocalStorage<sortType>('sort')
        if (storedSort) dispatch(setSort(storedSort))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => { if (user.status === 'READY') setInLocalStorage('projectId', user.project.selectedProject.id) }, [user])
    useEffect(() => setInLocalStorage('viewStyle', viewStyle), [viewStyle])
    useEffect(() => setInLocalStorage('sort', sort), [sort])
}

export default useLocalStorage