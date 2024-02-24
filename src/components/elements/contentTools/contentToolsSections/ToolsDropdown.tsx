import Button from '../../../ui/button/Button'

import { useSelector, useDispatch } from '../../../../store/store'
import { setContentViewStyle } from '../../../../store/features/viewSlice/viewSlice'
import useContentEvents from '../../../../functions/useContentEvents/useContentEvents'

import iconUpload from '../../../../assets/icons/icon-upload.svg'
import iconCreate from '../../../../assets/icons/icon-create.svg'
import iconSelect from '../../../../assets/icons/icon-ok.svg'
import iconSort from '../../../../assets/icons/icon-sort.svg'
import iconFilter from '../../../../assets/icons/icon-filter.svg'
import iconDisplay from '../../../../assets/icons/icon-display.svg'
import iconList from '../../../../assets/icons/icon-list.svg'

const ToolsDropdown = () => {
    const { selectAll } = useContentEvents()
    const dispatch = useDispatch()

    const viewStyle = useSelector(state => state.view.contentViewStyle)

    return <>
        <section>
            <Button>
                <img src={iconUpload} alt="Prześlij pliki tutaj" />

                Prześlij pliki tutaj
            </Button>

            <Button $variant='secondary'>
                <img src={iconCreate} alt="Utwórz..." />

                Utwórz...
            </Button>
        </section>

        <hr />

        <section>
            <Button $variant='quaternary' onClick={() => selectAll()}>
                <img src={iconSelect} alt="Zaznacz wszystko" />

                Zaznacz wszystko
            </Button>

            <Button $variant='quaternary'>
                <img src={iconSort} alt="Sortuj..." />

                Sortuj...
            </Button>

            <Button $variant='quaternary'>
                <img src={iconFilter} alt="Filtruj..." />

                Filtruj...
            </Button>
        </section>

        <hr />

        <section>
            <Button $variant='quaternary' $active={viewStyle === 'ICONS'} onClick={() => dispatch(setContentViewStyle('ICONS'))}>
                <img src={iconDisplay} alt="Ikony" />

                Wyświetl: Ikony
            </Button>

            <Button $variant='quaternary' $active={viewStyle === 'LIST'} onClick={() => dispatch(setContentViewStyle('LIST'))}>
                <img src={iconList} alt="Lista" />

                Wyświetl: Lista
            </Button>
        </section>
    </>
}

export default ToolsDropdown