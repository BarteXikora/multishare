import { useEffect } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { setTreeLocation } from '../../../store/features/contentSlice/contentSlice'

import useContentEvents from '../../../functions/useContentEvents/useContentEvents'

import StyledContentSection from './ContentSection.styles'
import Folder from '../../elements/folder/Folder'
import File from '../../elements/file/File'
import EmptyFolder from '../../elements/emptyFolder/EmptyFolder'

const ContentSection = () => {
    const content = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)
    const dispatch = useDispatch()

    const { folderEvents, filesEvents } = useContentEvents()

    useEffect(() => {
        dispatch(setTreeLocation(-1))

    }, [dispatch])

    return <StyledContentSection>
        {
            content && content.folders && content.folders.length > 0 && (
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
                                />
                            })
                        }
                    </div>
                </section>
            )
        }

        {
            content && content.files && content.files.length > 0 && (
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
                                />
                            })
                        }
                    </div>
                </section>
            )
        }

        {
            (!content || (!content.folders && !content.files)) && <EmptyFolder />
        }
    </StyledContentSection>
}

export default ContentSection