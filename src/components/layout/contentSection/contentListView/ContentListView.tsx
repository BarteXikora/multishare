import StyledContentListView from './ContentListView.styles'
import { useSelector } from '../../../../store/store'
import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'

import FolderNotFound from '../../../elements/folderNotFound/FolderNotFound'
import ListHeader from '../../../elements/listHeader/ListHeader'
import ListFolderElement from '../../../elements/listFolderElement/ListFolderElement'
import ListFileElement from '../../../elements/listFileElement/ListFileElement'
import Empty from '../../../elements/empty/Empty'

const ContentListView = () => {
    const content = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)

    const { folderEvents, filesEvents } = useContentEvents()

    if (content.notFound) return <StyledContentListView><FolderNotFound /></StyledContentListView>

    return <StyledContentListView>
        {
            (content.folders.length > 0 || content.files.length > 0) && <div className="content-list">
                <ListHeader />

                {
                    content.folders.length > 0 && content.folders.map(folder => (
                        <ListFolderElement
                            key={folder.id}
                            name={folder.name}
                            isStar={folder.star}
                            lastModificationDate={folder.details.lastModificationDate}
                            isEmpty={folder.insideContent.folders + folder.insideContent.files > 0}
                            isSelected={selected.folders ? selected.folders.includes(folder.id) : false}

                            onClick={e => folderEvents.onClick(e, folder.id)}
                            onDoubleClick={() => folderEvents.onDoubleClick(folder.id)}
                            onTouchStart={e => folderEvents.onTouchStart(e, folder.id)}
                            onTouchEnd={e => folderEvents.onTouchEnd(e, folder.id)}
                        />
                    ))
                }

                {
                    content.files.length > 0 && content.files.map(file => (
                        <ListFileElement
                            key={file.id}
                            name={file.name}
                            isStar={file.star}
                            lastModificationDate={file.details.lastModificationDate}
                            extension={file.extension}
                            fileSizeBites={file.details.fileSizeBites}
                            isSelected={selected.files ? selected.files.includes(file.id) : false}
                            isFolderIconOffset={!!(content && content.folders && content.folders.length)}

                            onClick={e => filesEvents.onClick(e, file.id)}
                            onDoubleClick={() => filesEvents.onDoubleClick(file.id)}
                            onTouchStart={e => filesEvents.onTouchStart(e, file.id)}
                            onTouchEnd={e => filesEvents.onTouchEnd(e, file.id)}
                        />
                    ))
                }
            </div>
        }

        {(content.folders.length === 0 && content.files.length === 0) && <Empty />}
    </StyledContentListView>
}

export default ContentListView