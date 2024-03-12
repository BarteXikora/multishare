import StyledContentIconsView from './ContentIconsView.styles'

import { useSelector } from '../../../../store/store'
import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'

import FolderNotFound from '../../../elements/folderNotFound/FolderNotFound'
import Folder from '../../../elements/folder/Folder'
import File from '../../../elements/file/File'
import EmptyFolder from '../../../elements/emptyFolder/EmptyFolder'

const ContentIconsView = () => {
    const content = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)

    const { folderEvents, filesEvents } = useContentEvents()

    if (content.notFound) return <StyledContentIconsView><FolderNotFound /></StyledContentIconsView>

    return <StyledContentIconsView>
        {
            content.folders.length > 0 && (
                <section className='folders-section'>
                    <h2>Foldery:</h2>

                    <div className="content">
                        {
                            content.folders.map(folder => {
                                return <Folder
                                    key={folder.id}
                                    id={folder.id}
                                    displayName={folder.name}
                                    isStar={folder.star || false}
                                    isSelected={selected.folders ? selected.folders.includes(folder.id) : false}

                                    onClick={e => folderEvents.onClick(e, folder.id)}
                                    onDoubleClick={() => folderEvents.onDoubleClick(folder.id)}
                                    onTouchStart={e => folderEvents.onTouchStart(e, folder.id)}
                                    onTouchEnd={e => folderEvents.onTouchEnd(e, folder.id)}
                                />
                            })
                        }
                    </div>
                </section>
            )
        }

        {
            content.files.length > 0 && (
                <section className='files-section'>
                    <h2>Pliki:</h2>

                    <div className="content">
                        {
                            content.files.map(file => {
                                return <File
                                    key={file.id}
                                    displayName={file.name}
                                    extension={file.extension}
                                    preview={false}
                                    isStar={file.star || false}
                                    isSelected={selected.files ? selected.files.includes(file.id) : false}

                                    onClick={e => filesEvents.onClick(e, file.id)}
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