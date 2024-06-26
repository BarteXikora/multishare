import { useSelector, useDispatch } from '../../../../store/store'
import { setContentViewStyle } from '../../../../store/features/viewSlice/viewSlice'
import { showWindow } from '../../../../store/features/windowSlice/windowSlice'
import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'

import Button from '../../../ui/button/Button'
import { IconUpload, IconNewFolder, IconOK, IconSort, IconFilter, IconDisplay, IconList } from '../../../ui/icon/Icons'

type toolsDropdownType = {
    uploadHereDisabled: boolean,
    createNewFolderDisabled: boolean
}

const ToolsDropdown = ({ uploadHereDisabled, createNewFolderDisabled }: toolsDropdownType) => {
    const { selectAll } = useContentEvents()
    const dispatch = useDispatch()

    const viewStyle = useSelector(state => state.view.contentViewStyle)

    const handleUpload = () => dispatch(showWindow('UPLOAD'))

    const handleCreateFolderWindow = () => dispatch(showWindow('CREATE_NEW_FOLDER'))

    const handleSort = () => dispatch(showWindow('SORT'))

    const handleFilter = () => dispatch(showWindow('FILTER'))

    return <>
        {
            (!uploadHereDisabled || !createNewFolderDisabled) && <>
                <section>
                    {
                        !uploadHereDisabled && <Button onClick={handleUpload}>
                            <IconUpload />

                            Prześlij pliki
                        </Button>
                    }

                    {
                        !createNewFolderDisabled && <Button $variant='secondary' onClick={handleCreateFolderWindow}>
                            <IconNewFolder $color='dark' />

                            Nowy folder...
                        </Button>
                    }
                </section>

                <hr />
            </>
        }

        <section>
            <Button $variant='quaternary' onClick={() => selectAll()}>
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
        </section>

        <hr />

        <section>
            <Button $variant='quaternary' $active={viewStyle === 'ICONS'} onClick={() => dispatch(setContentViewStyle('ICONS'))}>
                <IconDisplay $color='dark' />

                Wyświetl: Ikony
            </Button>

            <Button $variant='quaternary' $active={viewStyle === 'LIST'} onClick={() => dispatch(setContentViewStyle('LIST'))}>
                <IconList $color='dark' />

                Wyświetl: Lista
            </Button>
        </section>
    </>
}

export default ToolsDropdown