import StyledContentListView from './ContentListView.styles'
import { useSelector } from '../../../../store/store'

import ListHeader from '../../../elements/listHeader/ListHeader'
import ListFolderElement from '../../../elements/listFolderElement/ListFolderElement'
import ListFileElement from '../../../elements/listFileElement/ListFileElement'
import EmptyFolder from '../../../elements/emptyFolder/EmptyFolder'

const ContentListView = () => {
    const content = useSelector(state => state.content.currentFolder)

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
                        />
                    ))
                }
            </div>
        }

        {(!content || (!content.folders && !content.files)) && <EmptyFolder />}
    </StyledContentListView>
}

export default ContentListView