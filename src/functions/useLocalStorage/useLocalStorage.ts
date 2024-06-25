import { useEffect } from 'react'
import { useSelector } from '../../store/store'
import setInLocalStorage from './setInLocalStorage/setInLocalStorage'

const useLocalStorage = () => {
    const user = useSelector(state => state.user)

    useEffect(() => {
        if (user.status === 'READY') setInLocalStorage('projectId', user.project.selectedProject.id)

    }, [user])
}

export default useLocalStorage