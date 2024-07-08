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
    const selected = useSelector(state => state.content.selected)

    const [isDataOk, setIsDataOk] = useState<boolean>(true)
    const [element, setElement] = useState<folderType | fileType | null>(null)
    const [elementType, setElementType] = useState<elementType>('FOLDER')

    const [isNewNameOk, setIsNewNameOk] = useState<boolean>(true)
    const [newName, setNewName] = useState<string>(getCurrentElement(content, selected).element?.name || '')

    // Getting selected element on stored selected or content change: 
    useEffect(() => {
        let currentElement = getCurrentElement(content, selected)

        if (currentElement.element === null || currentElement.elementType === null) return setIsDataOk(false)

        setElement(currentElement.element)
        setElementType(currentElement.elementType)

    }, [selected, content])

    // Validating the new name:
    useEffect(() => {
        setIsNewNameOk(newName.length > 0 && newName.length <= 50)

    }, [newName])

    // Handling selected elements name changnig:
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (!element) return null

        let update: updateContentType = { folders: [], files: [] }
        update[elementType === 'FOLDER' ? 'folders' : 'files'] = [{ id: element.id, name: newName }]

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
                            buttonOptions={{ disabled: !isNewNameOk }}
                            inputState={[newName, setNewName]}
                            onSubmit={e => handleSubmit(e)}
                            autoFocus
                            autoSelect
                        />
                    </section>

                    <section className="info-box">
                        {
                            !isNewNameOk && <span className='error'>
                                {
                                    newName.length < 1 ?
                                        `Należy podać nazwę ${elementType === 'FOLDER' ? 'folderu' : 'pliku'}.`
                                        :
                                        'Nazwa nie może być dłuższa, niż 50 znaków.'
                                }
                            </span>
                        }
                    </section>
                </>

                :

                <section><p className="error">Wystąpił błąd!</p></section>
        }
    </>
}

export default RenameWindow