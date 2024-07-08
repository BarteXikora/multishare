/** 
 * Elements pill; renders the list of elements in form of the small pills
 * 
 * It gets list of folders and files ids, then gets all the content from the store and
 * finally renders pills with found folders and files names.
**/

import { useState, useEffect } from 'react'
import { useSelector } from '../../../store/store'
import { contentType } from '../../../store/features/contentSlice/contentSlice.types'

import StyledElementsPills from './ElementsPills.styles'
import { IconFolder } from '../../ui/icon/Icons'

// Elements pills props types:
type ElementsPillsType = {
    folders: number[],
    files: number[]
}

const ElementsPills = ({ elements }: { elements: ElementsPillsType }) => {
    const content = useSelector(state => state.content.loadedContent)

    const [allContent, setAllContent] = useState<contentType>({ folders: [], files: [] })

    // Getting all content from the store when it changes:
    useEffect(() => {
        if (content.status !== 'READY') return

        setAllContent({
            folders: [...content.content.folders, ...content.trash.view.folders],
            files: [...content.content.files, ...content.trash.view.files]
        })

    }, [content])

    // Rendering the component:
    return <StyledElementsPills>
        {
            // Folders:
            elements.folders.map(folder => <div key={folder} className="element">
                <IconFolder $color='dark' />

                {
                    content.status === 'READY' && allContent.folders.find(f => f.id === folder)?.name
                }
            </div>)
        }

        {
            // Files:
            elements.files.map(file => <div key={file} className="element">
                {
                    content.status === 'READY' && allContent.files.find(f => f.id === file)?.name
                }
            </div>)
        }
    </StyledElementsPills>
}

export default ElementsPills