import { useSelector } from '../../../../store/store'

import StyledContentIconsView from './ContentIconsView.styles'
import FolderNotFound from '../../../elements/folderNotFound/FolderNotFound'
import TrashWarning from '../../../elements/trashWarning/TrashWarning'
import FoldersSection from './foldersSection/FoldersSection'
import FilesSection from './filesSection/FilesSection'
import Empty from '../../../elements/empty/Empty'

const ContentIconsView = () => {
    const content = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)
    const displayType = useSelector(state => state.content.displayType)

    if (content.notFound) return <StyledContentIconsView><FolderNotFound /></StyledContentIconsView>

    return <StyledContentIconsView>
        {displayType === 'TRASH' && <TrashWarning isTrashEmpty={content.folders.length + content.files.length === 0} />}

        {displayType !== 'FILES' && content.folders.length > 0 && <FoldersSection content={content} selected={selected} />}

        {content.files.length > 0 && <FilesSection content={content} selected={selected} displayType={displayType} />}

        {(content.folders.length === 0 && content.files.length === 0) && <Empty />}
    </StyledContentIconsView>

}

export default ContentIconsView