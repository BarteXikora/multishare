import { useState, useEffect, ReactNode } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
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

import iconClose from '../../../assets/icons/icon-close.svg'

const Window = () => {
    const dispatch = useDispatch()

    const window = useSelector(state => state.window)

    const [windowsBody, setWindowBody] = useState<ReactNode | null>(null)

    useEffect(() => {
        let selectedWindowBody = null

        switch (window.content) {
            case 'CREATE_NEW_FOLDER': selectedWindowBody = <NewFolderWindow />; break
            case 'CONFIRM_DELETE': selectedWindowBody = <ConfirmDeleteWindow />; break
            case 'CONFIRM_DELETE_FOREVER': selectedWindowBody = <ConfirmDeleteForeverWindow />; break
            case 'CAN_NOT_OPEN_IN_TRASH': selectedWindowBody = <CanNotOpenInTrashWindow data={window.data} />; break
            case 'RENAME': selectedWindowBody = <RenameWindow />; break
            case 'MOVE': selectedWindowBody = <MoveWindow />; break
            case 'UPLOAD': selectedWindowBody = <UploadWindow />; break
            case 'SORT': selectedWindowBody = <SortWindow />
        }

        setWindowBody(selectedWindowBody)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.content])

    if (!window.isShown) return null

    return <StyledWindow>
        <div className="container">
            <div className="bar">
                <h2>{window.title}</h2>

                <Button $variant='wrong' $size='big' className='close-button' onClick={() => dispatch(closeWindow())}>
                    <img src={iconClose} alt='Zamknij okno' />
                </Button>
            </div>

            <div className="content">
                {windowsBody || <>Error</>}
            </div>
        </div>
    </StyledWindow>
}

export default Window