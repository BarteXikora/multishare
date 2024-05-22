import { useEffect, useRef } from 'react'

import StyledDropArea from './DropArea.styles'
import Button from '../../ui/button/Button'
import LocationSelector from '../locationSelector/LocationSelector'

import getShortenName from '../../../functions/getShortenName/getShortenName'

import imgDrop from '../../../assets/images/img-drop.svg'
import imgDropColor from '../../../assets/images/img-drop-color.svg'
import imgFiles from '../../../assets/images/img-selected-files.svg'
import iconSelectFiles from '../../../assets/icons/icon-select-files.svg'
import iconUpload from '../../../assets/icons/icon-upload.svg'
import iconClose from '../../../assets/icons/icon-close.svg'

type DropAreaType = {
    filesState: [FileList | null, (f: FileList | null) => void]
    locationState: [number | null, (v: number | null) => void]
    upload: () => void
    showLocationSelector?: boolean
    showSelectButton?: boolean
}

const DropArea = ({ filesState, locationState, upload, showLocationSelector = true, showSelectButton = true }: DropAreaType) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const dropRef = useRef<HTMLDivElement>(null)

    const setDropSectionActive = (to: boolean) => {
        if (to) return dropRef.current && dropRef.current.classList.add('file-input-drag')
        dropRef.current && dropRef.current.classList.remove('file-input-drag')
    }

    useEffect(() => {
        if (!filesState[0] && inputRef.current) inputRef.current.value = ''

    }, [filesState])

    const handleUpload = () => {
        if (!filesState[0] || !locationState[0]) return

        upload()
    }

    return <StyledDropArea>
        <input
            type="file"
            multiple
            ref={inputRef}
            className='file-input'
            onClick={e => e.preventDefault()}
            onChange={e => { filesState[1](e.currentTarget.files); setDropSectionActive(false) }}
            onDragEnter={() => setDropSectionActive(true)}
            onDragLeave={() => setDropSectionActive(false)}
        />

        {
            filesState[0] ?
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
                            <img src={iconUpload} alt="Prześlij pliki" />

                            Prześlij wybrane pliki
                        </Button>

                        <Button $variant='wrong' onClick={() => filesState[1](null)}>
                            <img src={iconClose} alt="Anuluj" />

                            Anuluj
                        </Button>
                    </div>
                </section>

                :

                <section className="content empty-drop" ref={dropRef}>
                    <div className="section-image">
                        <img src={imgDrop} className='img' alt='Przeciągnij i upuść pliki tutaj' />
                        <img src={imgDropColor} className='img img-color' alt='Przeciągnij i upuść pliki tutaj' />
                    </div>

                    <h3 className='heading'>Upuść pliki i foldery tutaj, aby dodać je na dysk!</h3>

                    {
                        showSelectButton && <div className='actions'>
                            <Button onClick={() => inputRef.current?.dispatchEvent(new MouseEvent('click'))}>
                                <img src={iconSelectFiles} alt="Przeglądaj" />

                                Przeglądaj...
                            </Button>
                        </div>
                    }
                </section>
        }
    </StyledDropArea>
}

export default DropArea