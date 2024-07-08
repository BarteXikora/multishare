/** 
 * Location context menu
 * 
 * It is rendered in the ContextMenu component conditionally when clicking on the
 * content sections background.
**/

import { useSelector, useDispatch } from '../../../../store/store'
import useContentEvents from '../../../../hooks/useContentEvents/useContentEvents'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'
import { setContentViewStyle } from '../../../../store/features/viewSlice/viewSlice'
import { closeContextMenu } from '../../../../store/features/contextMenuSlice/contextMenuSlice'
import { contentViewStyleType } from '../../../../store/features/viewSlice/viewSlice.types'

import Button from '../../../ui/button/Button'
import { IconUpload, IconNewFolder, IconOK, IconSort, IconFilter, IconDisplay, IconList } from '../../../ui/icon/Icons'

const LocationContextMenu = () => {
    const { selectAll } = useContentEvents()
    const dispatch = useDispatch()

    const viewStyle = useSelector(state => state.view.contentViewStyle)
    const displayType = useSelector(state => state.content.displayType)

    // Handling buttons onClicks:
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

    // Rendering the component:
    return <>
        <Button $variant='quaternary' onClick={handleUpload} disabled={displayType === 'TRASH'}>
            <IconUpload $color='dark' />

            Prześlij pliki tutaj
        </Button>

        <Button $variant='quaternary' onClick={handleCreateFolderWindow} disabled={displayType !== 'TREE'}>
            <IconNewFolder $color='dark' />

            Nowy folder...
        </Button>

        <hr />

        <Button $variant='quaternary' onClick={handleSelectAll}>
            <IconOK $color='dark' />

            Zaznacz wszystko
        </Button>

        <Button $variant='quaternary' onClick={handleSort}>
            <IconSort $color='dark' />

            Sortuj...
        </Button>

        <Button $variant='quaternary' onClick={handleFilter}>
            <IconFilter $color='dark' />

            Filtruj...
        </Button>

        <hr />

        <Button $variant='quaternary' $active={viewStyle === 'ICONS'} onClick={() => handleView('ICONS')}>
            <IconDisplay $color='dark' />

            Wyświetl: Ikony
        </Button>

        <Button $variant='quaternary' $active={viewStyle === 'LIST'} onClick={() => handleView('LIST')}>
            <IconList $color='dark' />

            Wyświetl: Lista
        </Button>
    </>
}

export default LocationContextMenu