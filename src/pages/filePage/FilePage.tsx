/**
 * The file page, renders for the "/file" pathname, shows the selected file preview.
 * 
 * It gets file id from the pathname, then fetches file data with preview and
 * displays it. 
**/

import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import { useLocation } from 'react-router-dom'
import { initializePreview } from '../../store/features/previewSlice/previewSlice'

import StyledFilePage from './FilePage.styles'
import LoadingPage from '../loadingPage/LoadingPage'
import ErrorPage from '../errorPage/ErrorPage'
import PreviewTopBar from '../../components/layout/previewTopBar/PreviewTopBar'
import PreviewContentSection from '../../components/layout/previewContentSection/PreviewContentSection'
import getDataFromPathname from '../../functions/getDataFromPathname/getDataFromPathname'

const FilePage = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const preview = useSelector(state => state.preview.content)
    const user = useSelector(state => state.user)

    // Geting file id from the pathname and initializing fetching data when user is loaded:
    useEffect(() => {
        const { data } = getDataFromPathname(location.pathname)

        const fileId = Number(data)

        if (user.status === 'READY') dispatch(initializePreview(fileId))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    // Rendering LoadingPage or ErrorPage depending on stored contentStatus:
    if (preview.status === 'LOADING') return <LoadingPage />
    if (preview.status === 'ERROR') return <ErrorPage error={preview.error} />

    // Rendering the file preview page when file data is loaded:
    return <StyledFilePage>
        <PreviewTopBar name={preview.file.name} extension={preview.file.extension} />

        <PreviewContentSection type={preview.type} data={preview.data} extension={preview.file.extension} file={preview.file} />
    </StyledFilePage>
}

export default FilePage