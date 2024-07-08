/** 
 * Content section
 * 
 * It displays content in the form of icons or list and warnings if there are any.
**/

import { useSelector } from '../../../store/store'

import StyledContentSection from './ContentSection.styles'
import TrashWarning from '../../elements/trashWarning/TrashWarning'
import SearchInfo from '../../elements/searchInfo/SearchInfo'
import ContentIconsView from './contentIconsView/ContentIconsView'
import ContentListView from './contentListView/ContentListView'
import ContextMenu from '../../elements/contextMenu/ContextMenu'

const ContentSection = () => {
    const contentViewStyle = useSelector(state => state.view.contentViewStyle)
    const search = useSelector(state => state.content.search)
    const content = useSelector(state => state.content.currentFolder)
    const displayType = useSelector(state => state.content.displayType)

    // Rendering the component:
    return <StyledContentSection>
        {
            // Warnings:
            (
                displayType === 'TRASH' || (search !== '' && (content.folders.length + content.files.length > 0))

            ) && <section className="infos">
                {displayType === 'TRASH' && <TrashWarning isTrashEmpty={content.folders.length + content.files.length === 0} />}

                {search !== '' && (content.folders.length + content.files.length > 0) && <SearchInfo search={search} />}
            </section>
        }

        {
            // Content:
            contentViewStyle === 'ICONS' ?
                <ContentIconsView />
                :
                <ContentListView />
        }

        <ContextMenu />
    </StyledContentSection>
}

export default ContentSection