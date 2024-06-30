import getDataFromPathname from '../../../../functions/getDataFromPathname/getDataFromPathname'
import getFromLocalStorage from '../../../../hooks/useLocalStorage/getFromLocalStorage/getFromLocalStorage'

const getLogInAction = (action: any) => {
    let projectId = getDataFromPathname(action.payload.pathname).projectId
    if (!projectId) projectId = getFromLocalStorage<number>('projectId')

    return { projectId }
}

export default getLogInAction