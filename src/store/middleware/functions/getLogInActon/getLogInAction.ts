import getDataFromPathname from '../../../../functions/getDataFromPathname/getDataFromPathname'

const getLogInAction = (action: any) => {
    return { projectId: getDataFromPathname(action.payload.pathname).projectId }
}

export default getLogInAction