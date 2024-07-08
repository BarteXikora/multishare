/** 
 * Drop area; renders area the user can drop files on
 * 
 * It renders the file input in the form of area, or the LocationSelector component when files are selected. 
**/

import { useEffect, useRef } from 'react'

import StyledDropArea from './DropArea.styles'
import Button from '../../ui/button/Button'
import LocationSelector from '../locationSelector/LocationSelector'
import { IconSelectFiles, IconUpload, IconClose } from '../../ui/icon/Icons'

import getShortenName from '../../../functions/getShortenName/getShortenName'

import imgDrop from '../../../assets/images/img-drop.svg'
import imgDropColor from '../../../assets/images/img-drop-color.svg'
import imgFiles from '../../../assets/images/img-selected-files.svg'

// Drop area props type:
type DropAreaType = {
    filesState: [File[] | null, (f: File[] | null) => void]
    locationState: [number | null, (v: number | null) => void]
    upload: () => void
    showLocationSelector?: boolean
    showSelectButton?: boolean
}

const DropArea = ({ filesState, locationState, upload, showLocationSelector = true, showSelectButton = true }: DropAreaType) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const dropRef = useRef<HTMLDivElement>(null)

    // Handling the addition and removal of certain CSS styles to the drop area on drag enter and leave 
    // events to show the user a visual hint that they can drop files.
    const setDropSectionActive = (to: boolean) => {
        if (to) return dropRef.current && dropRef.current.classList.add('file-input-drag')
        dropRef.current && dropRef.current.classList.remove('file-input-drag')
    }

    // Clearing the file input when filesState is cleared:
    useEffect(() => {
        if (!filesState[0] && inputRef.current) inputRef.current.value = ''

    }, [filesState])

    // Handling seting files from the input to the state:
    const handleSetFiles = (files: FileList | null) => {
        if (!files) return

        let acceptedFiles: File[] = []

        Array.from(files).forEach(file => {
            if (file.type !== '') acceptedFiles.push(file)
        })

        filesState[1](acceptedFiles)
        setDropSectionActive(false)
    }

    // Handling calling the upload function when all data is correct:
    const handleUpload = () => {
        if (!filesState[0] || !locationState[0]) return

        upload()
    }

    // Rendering the component:
    return <StyledDropArea>

        {/* The files input: */}
        <input
            type="file"
            multiple
            ref={inputRef}
            className='file-input'
            onClick={e => e.preventDefault()}
            onChange={e => handleSetFiles(e.currentTarget.files)}
            onDragEnter={() => setDropSectionActive(true)}
            onDragLeave={() => setDropSectionActive(false)}
        />

        {
            (filesState[0] && filesState[0].length > 0) ?

                // The location selection: 
                <section className='content selected-files'>
                    <img src={imgFiles} className='section-img' alt="Wybrano pliki" />

                    <h3 className='heading'>
                        {
                            filesState[0].length === 1 ?
                                getShortenName(filesState[0][0].name, 30)
                                :
                                `Wybrane pliki (${filesState[0].length})`
                        }
                    </h3>

                    {showLocationSelector && <LocationSelector selectionState={locationState} excluded={[]} />}

                    {
                        showLocationSelector && <div className="warning">
                            {!(filesState[0] && locationState[0]) && 'Należy wybrać lokalizację!'}
                        </div>
                    }

                    <div className="actions">
                        <Button onClick={handleUpload} disabled={!(filesState[0] && locationState[0])}>
                            <IconUpload $color={!(filesState[0] && locationState[0]) ? 'dark' : 'light'} />

                            Prześlij wybrane pliki
                        </Button>

                        <Button $variant='wrong' onClick={() => filesState[1](null)}>
                            <IconClose />

                            Anuluj
                        </Button>
                    </div>
                </section>

                :

                // The drop area:
                <section className="content empty-drop" ref={dropRef}>
                    <div className="section-image">
                        <img src={imgDrop} className='img' alt='Przeciągnij i upuść pliki tutaj' />
                        <img src={imgDropColor} className='img img-color' alt='Przeciągnij i upuść pliki tutaj' />
                    </div>

                    <h3 className='heading'>Upuść pliki tutaj, aby dodać je na dysk!</h3>

                    <h3 className="heading-mobile">
                        Prześlij pliki...
                    </h3>

                    {
                        showSelectButton && <div className='actions'>
                            <Button onClick={() => inputRef.current?.dispatchEvent(new MouseEvent('click'))}>
                                <IconSelectFiles />

                                Przeglądaj...
                            </Button>
                        </div>
                    }
                </section>
        }
    </StyledDropArea>
}

export default DropArea