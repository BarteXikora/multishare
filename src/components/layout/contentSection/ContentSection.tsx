import { useSelector } from '../../../store/store'

import StyledContentSection from './ContentSection.styles'
import SearchInfo from '../../elements/searchInfo/SearchInfo'
import ContentIconsView from './contentIconsView/ContentIconsView'
import ContentListView from './contentListView/ContentListView'

const ContentSection = () => {
    const contentViewStyle = useSelector(state => state.view.contentViewStyle)
    const search = useSelector(state => state.content.search)
    const content = useSelector(state => state.content.currentFolder)

    return <StyledContentSection>
        {search !== '' && (content.folders.length + content.files.length > 0) && <SearchInfo search={search} />}

        {
            contentViewStyle === 'ICONS' ?
                <ContentIconsView />
                :
                <ContentListView />
        }
    </StyledContentSection>
}

export default ContentSection