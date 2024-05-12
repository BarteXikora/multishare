import StyledMoveWindow from './MoveWindow.styles'
import LocationSelector from '../../elements/locationSelector/LocationSelector'
import Button from '../../ui/button/Button'

import { useState } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import iconMove from '../../../assets/icons/icon-move.svg'

const MoveWindow = () => {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.content.selected)

    const [selectedLocation, setSelectedLocation] = useState<number | null>(null)

    return <StyledMoveWindow>
        <div className="info-section">
            <h2>{
                `Przenieś ${selected.folders.length + selected.files.length === 1 ?
                    'zaznaczony element' : 'zaznaczone elementy (' + (selected.folders.length + selected.files.length) + ')'
                }:`
            }</h2>
        </div>

        <LocationSelector selectionState={[selectedLocation, setSelectedLocation]} excluded={selected.folders} />

        <div className="actions-section">
            <div className="warning">{selectedLocation === null && 'Należy wybrać lokalizację!'}</div>

            <div className="buttons">
                <Button $variant='secondary' onClick={() => dispatch(closeWindow())}>
                    Anuluj
                </Button>

                <Button disabled={selectedLocation === null}>
                    <img src={iconMove} alt='Przenieś' />

                    Przenieś
                </Button>
            </div>
        </div>
    </StyledMoveWindow>
}

export default MoveWindow