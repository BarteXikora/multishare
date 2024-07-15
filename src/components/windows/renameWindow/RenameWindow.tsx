/** 
 * Rename window
 * 
 * The window is shown when user wants to change the selected folder or file name.
**/

import { useState, useEffect, FormEvent } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { elementType, fileType, folderType, loadedContentType, selectedType, updateContentType }
    from '../../../store/features/contentSlice/contentSlice.types'

import getShortenName from '../../../functions/getShortenName/getShortenName'
import InputButton from '../../ui/inputButton/InputButton'
import { updateContent } from '../../../store/features/contentSlice/contentSlice'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'
import { ELEMENT_NAME_LENGTH } from '../../../store/features/contentSlice/contentSlice.types'

import { IconEdit } from '../../ui/icon/Icons'

type getCurrentElementType = { element: folderType | fileType | null, elementType: elementType | null }

// Getting selected element with all needed data:
const getCurrentElement = (content: loadedContentType, selected: selectedType): getCurrentElementType => {
    let response: getCurrentElementType = { element: null, elementType: null }

    if (content.status !== 'READY') return response
    if (selected.folders.length + selected.files.length !== 1) return response

    if (selected.folders.length === 1) {
        response.elementType = 'FOLDER'
        response.element = content.content.folders.find(f => f.id === selected.folders[0]) || null

    } else {
        response.elementType = 'FILE'
        response.element = content.content.files.find(f => f.id === selected.files[0]) || null
    }

    return response
}

const RenameWindow = () => {
    const dispatch = useDispatch()

    const content = useSelector(state => state.content.loadedContent)
    const currentFolder = useSelector(state => state.content.currentFolder)
    const selected = useSelector(state => state.content.selected)

    const [isDataOk, setIsDataOk] = useState<boolean>(true)
    const [element, setElement] = useState<folderType | fileType | null>(null)
    const [elementType, setElementType] = useState<elementType>('FOLDER')

    const [validation, setValidation] = useState<string | false>(false)
    const [usedElementsNemes, setUsedElementsNames] = useState<string[]>([])
    const [newName, setNewName] = useState<string>(getCurrentElement(content, selected).element?.name || '')

    // Getting selected element on stored selected or content change: 
    useEffect(() => {
        let currentElement = getCurrentElement(content, selected)

        if (currentElement.element === null || currentElement.elementType === null) return setIsDataOk(false)

        setElement(currentElement.element)
        setElementType(currentElement.elementType)

    }, [selected, content])

    // Setting the list of taken names of a specific element type: 
    useEffect(() => {
        if (elementType === 'FOLDER') setUsedElementsNames(currentFolder.folders.map(f => f.name))
        else setUsedElementsNames(currentFolder.files.map(f => f.name))

    }, [elementType, currentFolder])

    // Validating the new name:
    useEffect(() => {
        let currentValidation: string | false = false
        let newNameTrimmed = newName.trim()

        if (newNameTrimmed.length === 0)
            currentValidation = 'Należy podać nazwę folderu.'

        else if (newNameTrimmed.length < ELEMENT_NAME_LENGTH.MIN)
            currentValidation = `Wybrana nazwa jest zbyt krótka (minimum ${ELEMENT_NAME_LENGTH.MIN} znaków).`

        else if (newNameTrimmed.length > ELEMENT_NAME_LENGTH.MAX)
            currentValidation = `Wybrana nazwa jest zbyt długa (maksymalnie ${ELEMENT_NAME_LENGTH.MAX} znaków).`

        else if (newName === element?.name)
            return setValidation(false)

        else if (usedElementsNemes.includes(newNameTrimmed))
            currentValidation = 'Wybrana nazwa jest już zajęta.'

        setValidation(currentValidation)

    }, [newName, usedElementsNemes, element])

    // Handling selected elements name changnig:
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (!element) return null

        let update: updateContentType = { folders: [], files: [] }
        update[elementType === 'FOLDER' ? 'folders' : 'files'] = [{ id: element.id, name: newName.trim() }]

        dispatch(updateContent(update))
        dispatch(closeWindow())
    }

    // Rendering the component:
    return <>
        {
            isDataOk ?
                <>
                    <section>
                        <h2>Zmień nazwę {elementType === 'FOLDER' ? 'folderu' : 'pliku'}:</h2>

                        <p>Obecna nazwa: <b>{getShortenName(element?.name || '', 30)}</b></p>
                    </section>

                    <section>
                        <InputButton
                            buttonContent={<><IconEdit /> Zmień nazwę</>}
                            buttonOptions={{ disabled: !!validation }}
                            inputState={[newName, setNewName]}
                            onSubmit={e => handleSubmit(e)}
                            autoFocus
                            autoSelect
                        />
                    </section>

                    <section className="info-box">
                        {validation && <span className='error'>{validation}</span>}
                    </section>
                </>

                :

                <section><p className="error">Wystąpił błąd!</p></section>
        }
    </>
}

export default RenameWindow