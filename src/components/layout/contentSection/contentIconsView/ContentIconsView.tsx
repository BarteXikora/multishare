import StyledContentIconsView from './ContentIconsView.styles'

import { useSelector } from '../../../../store/store'
import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'

import FolderNotFound from '../../../elements/folderNotFound/FolderNotFound'
import TrashWarning from '../../../elements/trashWarning/TrashWarning'
import File from '../../../elements/file/File'
import EmptyFolder from '../../../elements/emptyFolder/EmptyFolder'
import FoldersSection from './foldersSection/FoldersSection'

const ContentIconsView = () => {
    const content = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)
    const displayType = useSelector(state => state.content.displayType)

    const { filesEvents } = useContentEvents()

    if (content.notFound) return <StyledContentIconsView><FolderNotFound /></StyledContentIconsView>

    return <StyledContentIconsView>
        {displayType === 'TRASH' && <TrashWarning />}

        {displayType !== 'FILES' && content.folders.length > 0 && <FoldersSection content={content} selected={selected} />}

        {
            content.files.length > 0 && (
                <section className='files-section'>
                    <h2>{displayType !== 'FILES' ? 'Pliki:' : 'Wszystkie pliki:'}</h2>

                    <div className="content">
                        {
                            content.files.map(file => {
                                return <File
                                    key={file.id}
                                    displayName={file.name}
                                    extension={file.extension}
                                    preview={file.preview}
                                    isStar={file.star || false}
                                    isSelected={selected.files ? selected.files.includes(file.id) : false}

                                    onClick={e => filesEvents.onClick(e, file.id)}
                                    onDoubleClick={() => filesEvents.onDoubleClick(file.id)}
                                    onTouchStart={e => filesEvents.onTouchStart(e, file.id)}
                                    onTouchEnd={e => filesEvents.onTouchEnd(e, file.id)}
                                />
                            })
                        }
                    </div>
                </section>
            )
        }

        {
            (content.folders.length === 0 && content.files.length === 0) && <EmptyFolder />
        }
    </StyledContentIconsView>

}

export default ContentIconsView