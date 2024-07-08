/**
 * getLogInAction function
 * 
 * The function is called in the socketEvents function to get data for the log_in socket event.
 * It gets project Id from the pathname. If pathname doesn't contain project ID, it gets it 
 * from the local storage.
 */

import getDataFromPathname from '../../../../functions/getDataFromPathname/getDataFromPathname'
import getFromLocalStorage from '../../../../hooks/useLocalStorage/getFromLocalStorage/getFromLocalStorage'

const getLogInAction = (action: any) => {

    // Getting project ID from the pathname: 
    let projectId = getDataFromPathname(action.payload.pathname).projectId

    // Getting project ID from the local storage if not found in the pathname:
    if (!projectId) projectId = getFromLocalStorage<number>('projectId')

    // Returning the found value:
    return { projectId }
}

export default getLogInAction