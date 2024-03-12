import { useSelector } from '../../store/store'

import StyledFilePage from './FilePage.styles'
import LoadingPage from '../loadingPage/LoadingPage'
import ErrorPage from '../errorPage/ErrorPage'

const FilePage = () => {
    const preview = useSelector(state => state.preview.content)

    if (preview.status === 'LOADING') return <LoadingPage />
    if (preview.status === 'ERROR') return <ErrorPage error={preview.error} />

    return <StyledFilePage>
        {preview.file.name}
    </StyledFilePage>
}

export default FilePage