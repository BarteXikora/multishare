import { useState, useEffect } from 'react'
import { useSelector } from '../../../store/store'
import { contentType } from '../../../store/features/contentSlice/contentSlice.types'

import StyledElementsPills from './ElementsPills.styles'
import { IconFolder } from '../../ui/icon/Icons'

type ElementsPillsType = {
    folders: number[],
    files: number[]
}

const ElementsPills = ({ elements }: { elements: ElementsPillsType }) => {
    const content = useSelector(state => state.content.loadedContent)

    const [allContent, setAllContent] = useState<contentType>({ folders: [], files: [] })

    useEffect(() => {
        if (content.status !== 'READY') return

        setAllContent({
            folders: [...content.content.folders, ...content.trash.view.folders],
            files: [...content.content.files, ...content.trash.view.files]
        })

    }, [content])

    return <StyledElementsPills>
        {
            elements.folders.map(folder => <div key={folder} className="element">
                <IconFolder $color='dark' />

                {
                    content.status === 'READY' && allContent.folders.find(f => f.id === folder)?.name
                }
            </div>)
        }

        {
            elements.files.map(file => <div key={file} className="element">
                {
                    content.status === 'READY' && allContent.files.find(f => f.id === file)?.name
                }
            </div>)
        }
    </StyledElementsPills>
}

export default ElementsPills