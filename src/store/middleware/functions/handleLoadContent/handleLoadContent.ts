/**
 * handleLoadContent function
 * 
 * It is used as a callback in the socketEventListeners function for the content action. It 
 * sets loaded content, then setting folders tree location based on the path.
 */

import { setContent, setTreeLocation } from '../../../features/contentSlice/contentSlice'
import getDataFromPathname from '../../../../functions/getDataFromPathname/getDataFromPathname'

import { Dispatch } from '@reduxjs/toolkit'

const handleLoadContent = (data: any, dispatch: Dispatch) => {

    // Setting the loaded content:
    dispatch(setContent(data))

    // Getting folder ID from the path:
    const pathname = window.location.pathname
    let folderId = getDataFromPathname(pathname).data

    if (folderId === null || folderId === 'home') folderId = '-1'

    // Setting the folders tree location:
    dispatch(setTreeLocation(Number(folderId)))
}

export default handleLoadContent