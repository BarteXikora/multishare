/**
 * useLocalStorage custom hook
 * 
 * This hook manages state persistence using the localStorage API. It allows storing and retrieving
 * values across page reloads. The hook synchronizes relevant state variables with localStorage.
 */

import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import setInLocalStorage from './setInLocalStorage/setInLocalStorage'
import getFromLocalStorage from './getFromLocalStorage/getFromLocalStorage'
import { contentViewStyleType } from '../../store/features/viewSlice/initialState.types'
import { setContentViewStyle } from '../../store/features/viewSlice/viewSlice'
import { filterType, sortType } from '../../store/features/contentSlice/contentSlice.types'
import { setFilter, setSort } from '../../store/features/contentSlice/contentSlice'

const useLocalStorage = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.user)
    const viewStyle = useSelector(state => state.view.contentViewStyle)
    const sort = useSelector(state => state.content.sort)
    const filter = useSelector(state => state.content.filter)

    // Sync viewStyle, sort, and filter settings from localStorage on load:
    useEffect(() => {
        const storedViewStyle = getFromLocalStorage<contentViewStyleType>('viewStyle')
        if (storedViewStyle) dispatch(setContentViewStyle(storedViewStyle))

        const storedSort = getFromLocalStorage<sortType>('sort')
        if (storedSort) dispatch(setSort(storedSort))

        const storedFilter = getFromLocalStorage<filterType>('filter')
        if (storedFilter) dispatch(setFilter(storedFilter))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Updating project ID in localStorage when user status changes:
    useEffect(() => { if (user.status === 'READY') setInLocalStorage('projectId', user.project.selectedProject.id) }, [user])

    // Sync viewStyle, sort, and filter settings to localStorage on change:
    useEffect(() => setInLocalStorage('viewStyle', viewStyle), [viewStyle])
    useEffect(() => setInLocalStorage('sort', sort), [sort])
    useEffect(() => setInLocalStorage('filter', filter), [filter])
}

export default useLocalStorage