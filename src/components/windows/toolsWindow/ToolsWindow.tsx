import { useSelector, useDispatch } from '../../../store/store'
import { closeWindow, showWindow } from '../../../store/features/windowSlice/windowSlice'
import { setContentViewStyle } from '../../../store/features/viewSlice/viewSlice'
import { contentViewStyleType } from '../../../store/features/viewSlice/initialState.types'
import useContentEvents from '../../../functions/useContentEvents/useContentEvents'

import StyledToolsWindow from './ToolsWindow.styles'
import Button from '../../ui/button/Button'
import {
    IconUpload, IconNewFolder, IconOK, IconSort,
    IconFilter, IconDisplay, IconList

} from '../../ui/icon/Icons'

const ToolsWindow = () => {
    const dispatch = useDispatch()
    const { selectAll } = useContentEvents()

    const displayType = useSelector(state => state.content.displayType)
    const viewStyle = useSelector(state => state.view.contentViewStyle)

    const handleSelectAll = () => {
        selectAll()
        dispatch(closeWindow())
    }

    const handleSetViewStyle = (style: contentViewStyleType) => {
        dispatch(setContentViewStyle(style))
        dispatch(closeWindow())
    }

    return <StyledToolsWindow>
        {
            displayType !== 'TRASH' && <section className="main">
                <Button $variant='quaternary' $size='big' onClick={() => dispatch(showWindow('UPLOAD'))}>
                    <IconUpload $color='dark' />

                    Prześlij pliki
                </Button>

                {
                    displayType === 'TREE' && <Button
                        $variant='quaternary'
                        $size='big'
                        onClick={() => dispatch(showWindow('CREATE_NEW_FOLDER'))}
                    >
                        <IconNewFolder $color='dark' />

                        Nowy folder
                    </Button>
                }
            </section>
        }

        <hr />

        <section className="main">
            <Button
                $variant='quaternary'
                $size='big'
                onClick={handleSelectAll}
            >
                <IconOK $color='dark' />

                Zaznacz wszystko
            </Button>

            <Button $variant='quaternary' $size='big' onClick={() => dispatch(showWindow('SORT'))}>
                <IconSort $color='dark' />

                Sortuj...
            </Button>

            <Button $variant='quaternary' $size='big' onClick={() => dispatch(showWindow('FILTER'))}>
                <IconFilter $color='dark' />

                Filtruj...
            </Button>
        </section>

        <hr />

        <section className="main">
            <Button $variant='quaternary' $size='big' $active={viewStyle === 'ICONS'} onClick={() => handleSetViewStyle('ICONS')}>
                <IconDisplay $color='dark' />

                Wyświetl: Ikony
            </Button>

            <Button $variant='quaternary' $size='big' $active={viewStyle === 'LIST'} onClick={() => handleSetViewStyle('LIST')}>
                <IconList $color='dark' />

                Wyświetl: Lista
            </Button>
        </section>
    </StyledToolsWindow >
}

export default ToolsWindow