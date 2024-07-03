/** 
 * The content tools buttons; displays buttons for the available content operations
 * 
 * The component renders general tools (upload files and create new folder) for every display
 * type, and list tools - when nothing is selected, or selected tools - when anything is selected.
 * Showing and hiding buttons on selection change is managed by css display. 
**/

import { useState, useEffect } from 'react'
import { useSelector } from '../../../store/store'

import StyledContentTools from './ContentTools.styles'
import AnimatedContentTools from './ContentTools.animation'

import GeneralTools from './contentToolsSections/GeneralTools'
import SelectedTools from './contentToolsSections/SelectedTools'
import ListTools from './contentToolsSections/ListTools'

const ContentTools = () => {
    const selected = useSelector(state => state.content.selected)

    const [isSelectedToolsShown, setIsSelectedToolsShown] = useState<boolean>(false)

    // Seting isSelectedToolsShown (is anything selected) state on stored selection change:
    useEffect(() => {
        let sum = 0

        if (selected.folders) sum = selected.folders.length
        if (selected.files) sum += selected.files.length

        setIsSelectedToolsShown(sum !== 0)

    }, [selected])

    // Rendering the component:
    return <StyledContentTools className={isSelectedToolsShown ? 'selected-tools-shown' : ''}>
        <GeneralTools />

        <AnimatedContentTools key={isSelectedToolsShown ? 0 : 1}>
            <SelectedTools />

            <ListTools />
        </AnimatedContentTools>
    </StyledContentTools>
}

export default ContentTools