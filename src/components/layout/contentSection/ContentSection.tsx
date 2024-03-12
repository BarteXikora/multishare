import { useSelector } from '../../../store/store'
import useUpdateContent from '../../../functions/useUpdateContent/useUpdateContent'
import useUpdatePathName from '../../../functions/useUpdatePathName/useUpdatePathName'

import StyledContentSection from './ContentSection.styles'
import ContentIconsView from './contentIconsView/ContentIconsView'
import ContentListView from './contentListView/ContentListView'

const ContentSection = () => {
    const contentViewStyle = useSelector(state => state.view.contentViewStyle)

    useUpdatePathName()
    useUpdateContent()

    return <StyledContentSection>
        {
            contentViewStyle === 'ICONS' ?
                <ContentIconsView />
                :
                <ContentListView />
        }
    </StyledContentSection>
}

export default ContentSection