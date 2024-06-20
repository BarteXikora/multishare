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

    useEffect(() => {
        const { data } = getDataFromPathname(location.pathname)

        const fileId = Number(data)

        if (user.status === 'READY') dispatch(initializePreview(fileId))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    if (preview.status === 'LOADING') return <LoadingPage />
    if (preview.status === 'ERROR') return <ErrorPage error={preview.error} />

    return <StyledFilePage>
        <PreviewTopBar name={preview.file.name} extension={preview.file.extension} />

        <PreviewContentSection type={preview.type} data={preview.data} extension={preview.file.extension} file={preview.file} />
    </StyledFilePage>
}

export default FilePage