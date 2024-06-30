import { useSelector } from '../../../../store/store'

import StyledContentIconsView from './ContentIconsView.styles'
import FolderNotFound from '../../../elements/folderNotFound/FolderNotFound'
import FoldersSection from './foldersSection/FoldersSection'
import FilesSection from './filesSection/FilesSection'
import Empty from '../../../elements/empty/Empty'
import MovePill from '../../../elements/movePill/MovePill'

const ContentIconsView = () => {
    const content = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)
    const onMove = useSelector(state => state.content.onMove)
    const displayType = useSelector(state => state.content.displayType)

    if (content.notFound) return <StyledContentIconsView><FolderNotFound /></StyledContentIconsView>

    return <StyledContentIconsView>
        {content.folders.length > 0 && <FoldersSection content={content} selected={selected} onMove={onMove} />}

        {content.files.length > 0 && <FilesSection content={content} selected={selected} onMove={onMove} displayType={displayType} />}

        {(content.folders.length === 0 && content.files.length === 0) && <Empty />}

        <MovePill />
    </StyledContentIconsView>

}

export default ContentIconsView