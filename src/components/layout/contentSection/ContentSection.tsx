import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { initialize } from '../../../store/features/contentSlice/contentSlice'
import useUpdateContent from '../../../functions/useUpdateContent/useUpdateContent'

import StyledContentSection from './ContentSection.styles'

import ContentIconsView from './contentIconsView/ContentIconsView'
import ContentListView from './contentListView/ContentListView'

const ContentSection = () => {
    const status = useSelector(state => state.content.status)
    const contentViewStyle = useSelector(state => state.view.contentViewStyle)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initialize())

    }, [dispatch])

    useUpdateContent()

    return <StyledContentSection>
        {
            status === 'LOADING' ?
                'wczytywanie'

                :

                contentViewStyle === 'ICONS' ?
                    <ContentIconsView />
                    :
                    <ContentListView />
        }
    </StyledContentSection>
}

export default ContentSection