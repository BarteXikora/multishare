import StyledContentListView from './ContentListView.styles'
import { useSelector } from '../../../../store/store'
import useContentEvents from '../../../../hooks/useContentEvents/useContentEvents'

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
                            onTouchStart={() => folderEvents.onTouchStart(folder.id)}
                            onTouchMove={() => folderEvents.onTouchMove(folder.id)}
                            onTouchEnd={() => folderEvents.onTouchEnd(folder.id)}
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
                            onTouchStart={() => filesEvents.onTouchStart(file.id)}
                            onTouchMove={() => filesEvents.onTouchMove(file.id)}
                            onTouchEnd={() => filesEvents.onTouchEnd(file.id)}
                        />
                    ))
                }
            </div>
        }

        {(content.folders.length === 0 && content.files.length === 0) && <Empty />}
    </StyledContentListView>
}

export default ContentListView