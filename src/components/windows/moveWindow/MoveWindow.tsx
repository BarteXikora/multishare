import StyledMoveWindow from './MoveWindow.styles'
import Button from '../../ui/button/Button'

import { useState } from 'react'
import { useSelector } from '../../../store/store'

import iconMove from '../../../assets/icons/icon-move.svg'

const MoveWindow = () => {
    const selected = useSelector(state => state.content.selected)

    const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

    return <StyledMoveWindow>
        <div className="info-section">
            <h2>{
                `Przenieś ${selected.folders.length + selected.files.length === 1 ?
                    'zaznaczony element' : 'zaznaczone elementy (' + (selected.folders.length + selected.files.length) + ')'
                }:`
            }</h2>
        </div>

        <div className="actions-section">

            <div className="buttons">
                <Button $variant='secondary'>
                    Anuluj
                </Button>

                <Button disabled={selectedLocation === null}>
                    <img src={iconMove} alt='Przenieś' />

                    Przenieś
                </Button>

                {
                    selectedLocation === null && <div className="warning">Należy wybrać lokalizację!</div>
                }
            </div>
        </div>
    </StyledMoveWindow>
}

export default MoveWindow