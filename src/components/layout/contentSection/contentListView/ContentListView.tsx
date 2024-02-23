import StyledContentListView from './ContentListView.styles'
import Moment from 'react-moment'
import getFileTypeName from '../../../../functions/getFileTypeName/getFileTypeName'
import getDataWithUnit from '../../../../functions/getDataWithUnit/getDataWithUnit'

import ListHeader from '../../../elements/listHeader/ListHeader'

import { useSelector } from '../../../../store/store'
import EmptyFolder from '../../../elements/emptyFolder/EmptyFolder'

import iconFolder from '../../../../assets/icons/icon-project.svg'
import iconStar from '../../../../assets/icons/icon-star-color.svg'

const ContentListView = () => {
    const content = useSelector(state => state.content.currentFolder)

    return <StyledContentListView>
        {
            (content && (content.folders || content.files)) && <div className="content-list">
                <ListHeader />

                {
                    content && content.folders && content.folders.length > 0 && content.folders.map(folder => (
                        <div key={folder.id} className="list-element list-grid">
                            <div>
                                <img src={iconFolder} alt='Folder:' />

                                <b>{folder.name}</b>
                            </div>

                            <div>
                                {folder.star && <img src={iconStar} alt='Oznaczono gwiazdką' />}
                            </div>

                            <div>
                                <Moment format='D.MM.yyyy, HH:mm:ss'>{folder.details.lastModificationDate}</Moment>
                            </div>

                            <div>
                                {folder.insideContent.folders + folder.insideContent.files > 0 ? 'Folder plików' : 'Pusty folder'}
                            </div>
                        </div>
                    ))
                }

                {
                    content && content.files && content.files.length > 0 && content.files.map(file => (
                        <div key={file.id} className="list-element list-grid">
                            <div>
                                <div className="icon-placeholder"></div>

                                <b>{file.name}</b>
                            </div>

                            <div>
                                {file.star && <img src={iconStar} alt='Oznaczono gwiazdką' />}
                            </div>

                            <div>
                                <Moment format='D.MM.yyyy, HH:mm:ss'>{file.details.lastModificationDate}</Moment>
                            </div>

                            <div>
                                {getFileTypeName(file.extension)}
                            </div>

                            <div>
                                {file.details.fileSizeBites ? getDataWithUnit(file.details.fileSizeBites) : 'Brak danych'}
                            </div>
                        </div>
                    ))
                }
            </div>
        }

        {(!content || (!content.folders && !content.files)) && <EmptyFolder />}
    </StyledContentListView>
}

export default ContentListView