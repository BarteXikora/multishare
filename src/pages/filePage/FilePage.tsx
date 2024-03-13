import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../store/store'
import { useLocation } from 'react-router-dom'
import { initializePreview } from '../../store/features/previewSlice/previewSlice'

import StyledFilePage from './FilePage.styles'
import LoadingPage from '../loadingPage/LoadingPage'
import ErrorPage from '../errorPage/ErrorPage'

const FilePage = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const preview = useSelector(state => state.preview.content)

    useEffect(() => {
        const fileId = Number(location.pathname.substring(6, location.pathname.length))

        dispatch(initializePreview(fileId))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    if (preview.status === 'LOADING') return <LoadingPage />
    if (preview.status === 'ERROR') return <ErrorPage error={preview.error} />

    return <StyledFilePage>
        {preview.file.name}
    </StyledFilePage>
}

export default FilePage