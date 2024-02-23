import StyledContentListView from './ContentListView.styles'
import { useSelector } from '../../../../store/store'
import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'

import ListHeader from '../../../elements/listHeader/ListHeader'
import ListFolderElement from '../../../elements/listFolderElement/ListFolderElement'
import ListFileElement from '../../../elements/listFileElement/ListFileElement'
import EmptyFolder from '../../../elements/emptyFolder/EmptyFolder'

const ContentListView = () => {
    const content = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)

    const { folderEvents, filesEvents } = useContentEvents()

    return <StyledContentListView>
        {
            (content && (content.folders || content.files)) && <div className="content-list">
                <ListHeader />

                {
                    content && content.folders && content.folders.length > 0 && content.folders.map(folder => (
                        <ListFolderElement
                            key={folder.id}
                            name={folder.name}
                            isStar={folder.star}
                            lastModificationDate={folder.details.lastModificationDate}
                            isEmpty={folder.insideContent.folders + folder.insideContent.files > 0}
                            isSelected={selected.folders ? selected.folders.includes(folder.id) : false}

                            onClick={e => folderEvents.onClick(e, folder.id)}
                            onDoubleClick={() => folderEvents.onDoubleClick(folder.id)}
                        />
                    ))
                }

                {
                    content && content.files && content.files.length > 0 && content.files.map(file => (
                        <ListFileElement
                            key={file.id}
                            name={file.name}
                            isStar={file.star}
                            lastModificationDate={file.details.lastModificationDate}
                            extension={file.extension}
                            fileSizeBites={file.details.fileSizeBites}
                            isSelected={selected.files ? selected.files.includes(file.id) : false}

                            onClick={e => filesEvents.onClick(e, file.id)}
                        />
                    ))
                }
            </div>
        }

        {(!content || (!content.folders && !content.files)) && <EmptyFolder />}
    </StyledContentListView>
}

export default ContentListView