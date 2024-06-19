import { useSelector, useDispatch } from '../../../../store/store'
import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'
import { setContentViewStyle } from '../../../../store/features/viewSlice/viewSlice'
import { closeContextMenu } from '../../../../store/features/contextMenuSlice/contextMenuSlice'
import { contentViewStyleType } from '../../../../store/features/viewSlice/initialState.types'

import Button from '../../../ui/button/Button'

import iconUpload from '../../../../assets/icons/icon-upload-dark.svg'
import iconNewFolder from '../../../../assets/icons/icon-new-folder-dark.svg'
import iconSelect from '../../../../assets/icons/icon-ok.svg'
import iconSort from '../../../../assets/icons/icon-sort-dark.svg'
import iconFilter from '../../../../assets/icons/icon-filter-dark.svg'
import iconDisplay from '../../../../assets/icons/icon-display.svg'
import iconList from '../../../../assets/icons/icon-list.svg'

const LocationContextMenu = () => {
    const { selectAll } = useContentEvents()
    const dispatch = useDispatch()

    const viewStyle = useSelector(state => state.view.contentViewStyle)
    const displayType = useSelector(state => state.content.displayType)

    const handleCloseContextMenu = () => dispatch(closeContextMenu())

    const handleUpload = () => {
        dispatch(showWindow('UPLOAD'))
        handleCloseContextMenu()
    }

    const handleCreateFolderWindow = () => {
        dispatch(showWindow('CREATE_NEW_FOLDER'))
        handleCloseContextMenu()
    }

    const handleSelectAll = () => {
        selectAll()
        handleCloseContextMenu()
    }

    const handleSort = () => {
        dispatch(showWindow('SORT'))
        handleCloseContextMenu()
    }

    const handleFilter = () => {
        dispatch(showWindow('FILTER'))
        handleCloseContextMenu()
    }

    const handleView = (view: contentViewStyleType) => {
        dispatch(setContentViewStyle(view))
        handleCloseContextMenu()
    }

    return <>
        <Button $variant='quaternary' onClick={handleUpload} disabled={displayType === 'TRASH'}>
            <img src={iconUpload} alt='Prześlij pliki tutaj' />

            Prześlij pliki tutaj
        </Button>

        <Button $variant='quaternary' onClick={handleCreateFolderWindow} disabled={displayType !== 'TREE'}>
            <img src={iconNewFolder} alt='Nowy folder...' />

            Nowy folder...
        </Button>

        <hr />

        <Button $variant='quaternary' onClick={handleSelectAll}>
            <img src={iconSelect} alt='Zaznacz wszystko' />

            Zaznacz wszystko
        </Button>

        <Button $variant='quaternary' onClick={handleSort}>
            <img src={iconSort} alt='Sortuj...' />

            Sortuj...
        </Button>

        <Button $variant='quaternary' onClick={handleFilter}>
            <img src={iconFilter} alt='Filtruj...' />

            Filtruj...
        </Button>

        <hr />

        <Button $variant='quaternary' $active={viewStyle === 'ICONS'} onClick={() => handleView('ICONS')}>
            <img src={iconDisplay} alt='Wyświetl: Ikony' />

            Wyświetl: Ikony
        </Button>

        <Button $variant='quaternary' $active={viewStyle === 'LIST'} onClick={() => handleView('LIST')}>
            <img src={iconList} alt='Wyświetl: Lista' />

            Wyświetl: Lista
        </Button>
    </>
}

export default LocationContextMenu