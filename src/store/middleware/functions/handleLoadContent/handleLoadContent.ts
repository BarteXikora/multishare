import { setContent, setTreeLocation } from '../../../features/contentSlice/contentSlice'
import getDataFromPathname from '../../../../functions/getDataFromPathname/getDataFromPathname'

import { Dispatch } from '@reduxjs/toolkit'

const handleLoadContent = (data: any, dispatch: Dispatch) => {
    dispatch(setContent(data))

    const pathname = window.location.pathname
    let folderId = getDataFromPathname(pathname).data

    if (folderId === null || folderId === 'home') folderId = '-1'

    dispatch(setTreeLocation(Number(folderId)))
}

export default handleLoadContent