import { useSelector } from '../../../store/store'
import useUpdateContent from '../../../functions/useUpdateContent/useUpdateContent'

import StyledContentSection from './ContentSection.styles'
import ContentIconsView from './contentIconsView/ContentIconsView'
import ContentListView from './contentListView/ContentListView'

const ContentSection = () => {
    const loaded = useSelector(state => state.content.loadedContent)
    const contentViewStyle = useSelector(state => state.view.contentViewStyle)

    useUpdateContent()

    return <StyledContentSection>
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