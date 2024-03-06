import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { initialize } from '../../../store/features/contentSlice/contentSlice'
import useUpdateContent from '../../../functions/useUpdateContent/useUpdateContent'

import StyledContentSection from './ContentSection.styles'

import LoadingContent from '../../elements/loadingContent/LoadingContent'
import ContentError from '../../elements/contentError/ContentError'
import ContentIconsView from './contentIconsView/ContentIconsView'
import ContentListView from './contentListView/ContentListView'

const ContentSection = () => {
    const loaded = useSelector(state => state.content.loadedContent)
    const contentViewStyle = useSelector(state => state.view.contentViewStyle)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initialize())

    }, [dispatch])

    useUpdateContent()

    return <StyledContentSection>
        {loaded.status === 'LOADING' && <LoadingContent />}

        {loaded.status === 'ERROR' && <ContentError error={loaded.error} />}

        {
            loaded.status === 'READY' && (
                contentViewStyle === 'ICONS' ?
                    <ContentIconsView />
                    :
                    <ContentListView />
            )
        }
    </StyledContentSection>
}

export default ContentSection