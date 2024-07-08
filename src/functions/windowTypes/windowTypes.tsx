/**
 * windowTypes object
 * 
 * It contains all window types and assign to them window titles and react bodies.
 */

import { ReactNode } from 'react'
import { windowsList } from '../../store/features/windowSlice/windowSlice.types'

import NewFolderWindow from '../../components/windows/newFolderWindow/NewFolderWindow'
import ConfirmDeleteWindow from '../../components/windows/confirmDeleteWindow/ConfirmDeleteWindow'
import ConfirmDeleteForeverWindow from '../../components/windows/confirmDeleteForeverWindow/ConfirmDeleteForeverWindow'
import CanNotOpenInTrashWindow from '../../components/windows/canNotOpenInTrashWindow/CanNotOpenInTrashWindow'
import RenameWindow from '../../components/windows/renameWindow/RenameWindow'
import MoveWindow from '../../components/windows/moveWindow/MoveWindow'
import UploadWindow from '../../components/windows/uploadWindow/UploadWindow'
import ToolsWindow from '../../components/windows/toolsWindow/ToolsWindow'
import SortWindow from '../../components/windows/sortWindow/SortWindow'
import FilterWindow from '../../components/windows/filterWindow/FilterWindow'
import DateRangeWindow from '../../components/windows/dateRangeWindow/DateRangeWindow'
import SearchWindow from '../../components/windows/searchWindow/SearchWindow'

// The object:
const windowTypes: Record<windowsList, { title: string, body: ReactNode | null }> = {
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
    'UPLOAD': { title: 'Prześlij na dysk', body: <UploadWindow /> },
    'TOOLS': { title: 'Narzędzia', body: <ToolsWindow /> }
}

export default windowTypes