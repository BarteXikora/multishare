import { useState, useEffect } from 'react'
import { useSelector } from '../../../store/store'
import useFollowMouse from '../../../functions/useFollowMouse/useFollowMouse'

import StyledMovePill from './MovePill.styles'
import { elementType } from '../../../store/features/contentSlice/contentSlice.types'
import getShortenName from '../../../functions/getShortenName/getShortenName'

import iconFolder from '../../../assets/icons/icon-folder-dark.svg'
import iconFile from '../../../assets/icons/icon-file-dark.svg'
import iconMultiple from '../../../assets/icons/icon-multiple-elements-dark.svg'

type currentMoveType = {
    elementsType: elementType | 'MIXED'
    name: string
}

const MovePill = () => {
    const elementRef = useFollowMouse()

    const onMove = useSelector(state => state.content.onMove)
    const content = useSelector(state => state.content.currentFolder)

    const [currentMove, setCurrentMove] = useState<currentMoveType>({ elementsType: 'FOLDER', name: '' })

    useEffect(() => {
        let pillData: currentMoveType = { elementsType: 'FOLDER', name: '' }

        if (onMove.folders.length > 0 && onMove.files.length === 0) {
            if (onMove.folders.length === 1)
                pillData.name = content.folders.find(f => f.id === onMove.folders[0])?.name || 'Zaznaczony folder'
            else
                pillData.name = `Zaznaczone foldery (${onMove.folders.length})`

        } else if (onMove.folders.length === 0 && onMove.files.length > 0) {
            pillData.elementsType = 'FILE'

            if (onMove.files.length === 1) {
                const found = content.files.find(f => f.id === onMove.files[0])

                if (found) pillData.name = found.name + '.' + found.extension.toLocaleLowerCase()
                else pillData.name = 'Zaznaczony plik'

            } else
                pillData.name = `Zaznaczone pliki (${onMove.files.length})`

        } else if (onMove.folders.length > 0 && onMove.files.length > 0) {
            pillData.elementsType = 'MIXED'
            pillData.name = `Zaznaczone elementy (${(onMove.folders.length + onMove.files.length)})`
        }

        setCurrentMove(pillData)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onMove])

    if (onMove.folders.length + onMove.files.length === 0) return null

    return <StyledMovePill ref={elementRef}>
        <img
            src={
                currentMove.elementsType === 'FOLDER' ?
                    iconFolder
                    :
                    currentMove.elementsType === 'FILE' ?
                        iconFile
                        :
                        iconMultiple
            }
            alt='Wybrane elementy'
        />

        <h3>{getShortenName(currentMove.name, 30)}</h3>
    </StyledMovePill>
}

export default MovePill