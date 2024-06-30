import { useState } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'
import { updateContent } from '../../../store/features/contentSlice/contentSlice'
import { updateContentType } from '../../../store/features/contentSlice/contentSlice.types'

import LocationSelector from '../../elements/locationSelector/LocationSelector'
import Button from '../../ui/button/Button'
import { IconMove } from '../../ui/icon/Icons'

const MoveWindow = () => {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)

    const [selectedLocation, setSelectedLocation] = useState<number | null>(null)

    const handleMove = () => {
        if (!selectedLocation) return

        let data: updateContentType = {
            folders: selected.folders.map(f => { return { id: f, parentFolder: selectedLocation } }),
            files: selected.files.map(f => { return { id: f, parentFolder: selectedLocation } })
        }

        dispatch(updateContent(data))
        dispatch(closeWindow())
    }

    return <>
        <section>
            <h2>{
                `Przenieś ${selected.folders.length + selected.files.length === 1 ?
                    'zaznaczony element' : 'zaznaczone elementy (' + (selected.folders.length + selected.files.length) + ')'
                }:`
            }</h2>
        </section>

        <section>
            <LocationSelector selectionState={[selectedLocation, setSelectedLocation]} excluded={selected.folders} />
        </section>

        <section className="actions">
            <Button $variant='secondary' onClick={() => dispatch(closeWindow())} className='no-mobile-button'>
                Anuluj
            </Button>

            <Button disabled={selectedLocation === null} onClick={handleMove}>
                <IconMove $color={selectedLocation === null ? 'dark' : 'light'} />

                Przenieś
            </Button>
        </section>

        <section className="info-box">
            {selectedLocation === null && <span className="warning">Należy wybrać lokalizację!</span>}
        </section>
    </>
}

export default MoveWindow