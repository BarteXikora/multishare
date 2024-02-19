import { useState, useEffect } from 'react'
import { useSelector } from '../../../store/store'

import StyledContentTools from './ContentTools.styles'

import GeneralTools from './contentToolsSections/GeneralTools'
import SelectedTools from './contentToolsSections/SelectedTools'
import ListTools from './contentToolsSections/ListTools'

const ContentTools = () => {
    const selected = useSelector(state => state.content.selected)

    const [isSelectedToolsShown, setIsSelectedToolsShown] = useState<boolean>(false)

    useEffect(() => {
        let sum = 0

        if (selected.folders) sum = selected.folders.length
        if (selected.files) sum += selected.files.length

        setIsSelectedToolsShown(sum !== 0)

    }, [selected])

    return <StyledContentTools className={isSelectedToolsShown ? 'selected-tools-shown' : ''}>
        <GeneralTools />

        <SelectedTools />

        <ListTools />
    </StyledContentTools>
}

export default ContentTools