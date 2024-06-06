import { useState, useEffect, ReactNode } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { windowsList } from '../../../store/features/windowSlice/windowSlice.types'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import StyledWindow from './Window.styles'
import Button from '../../ui/button/Button'

import NewFolderWindow from '../../windows/newFolderWindow/NewFolderWindow'
import ConfirmDeleteWindow from '../../windows/confirmDeleteWindow/ConfirmDeleteWindow'
import ConfirmDeleteForeverWindow from '../../windows/confirmDeleteForeverWindow/ConfirmDeleteForeverWindow'
import CanNotOpenInTrashWindow from '../../windows/canNotOpenInTrashWindow/CanNotOpenInTrashWindow'
import RenameWindow from '../../windows/renameWindow/RenameWindow'
import MoveWindow from '../../windows/moveWindow/MoveWindow'
import UploadWindow from '../../windows/uploadWindow/UploadWindow'
import SortWindow from '../../windows/sortWindow/SortWindow'
import FilterWindow from '../../windows/filterWindow/FilterWindow'
import DateRangeWindow from '../../windows/dateRangeWindow/DateRangeWindow'
import SearchWindow from '../../windows/searchWindow/SearchWindow'

import iconClose from '../../../assets/icons/icon-close.svg'

const Window = () => {
    const dispatch = useDispatch()

    const window = useSelector(state => state.window)

    const [windowTitle, setWindowTitle] = useState<string>('')
    const [windowBody, setWindowBody] = useState<ReactNode | null>(null)

    const windows: Record<windowsList, { title: string, body: ReactNode | null }> = {
        'CAN_NOT_OPEN_IN_TRASH': { title: 'Element znajduje się w koszu', body: <CanNotOpenInTrashWindow /> },
        'CONFIRM_DELETE': { title: 'Czy na pewno chcesz przenieść do kosza?', body: <ConfirmDeleteWindow /> },
        'CONFIRM_DELETE_FOREVER': { title: 'Czy na pewno chcesz trwale usunąć elementy?', body: <ConfirmDeleteForeverWindow /> },
        'CREATE_NEW_FOLDER': { title: 'Utwórz nowy folder', body: <NewFolderWindow /> },
        'DATE_RANGE': { title: 'Wybierz zakres dat', body: <DateRangeWindow /> },
        'FILTER': { title: 'Filtruj zawartość', body: <FilterWindow /> },
        'MOVE': { title: 'Przenieś elementy', body: <MoveWindow /> },
        'RENAME': { title: 'Zmień nazwę', body: <RenameWindow /> },
        'SEARCH': { title: 'Wyszukaj', body: <SearchWindow /> },
        'SORT': { title: 'Sortuj zawartość', body: <SortWindow /> },
        'UPLOAD': { title: 'Prześlij na dysk', body: <UploadWindow /> }
    }

    useEffect(() => {
        if (!window.window) return

        setWindowTitle(windows[window.window].title)
        setWindowBody(windows[window.window].body)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.window])

    if (!window.isShown) return null

    return <StyledWindow>
        <div className="container">
            <div className="bar">
                <h2>{windowTitle}</h2>

                <Button $variant='wrong' $size='big' className='close-button' onClick={() => dispatch(closeWindow())}>
                    <img src={iconClose} alt='Zamknij okno' />
                </Button>
            </div>

            <div className="content">
                {windowBody || <>Error</>}
            </div>
        </div>
    </StyledWindow>
}

export default Window