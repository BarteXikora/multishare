import useContentEvents from '../../../hooks/useContentEvents/useContentEvents'
import { useDispatch } from '../../../store/store'
import { showWindow } from '../../../store/features/windowSlice/windowSlice'

import StyledTrashWarning from './TrashWarning.styles'
import Button from '../../ui/button/Button'
import { IconInfo, IconTrash } from '../../ui/icon/Icons'

const TrashWarning = ({ isTrashEmpty }: { isTrashEmpty: boolean }) => {
    const dispatch = useDispatch()
    const { selectAll } = useContentEvents()

    const handleEmptyTrash = () => {
        selectAll()
        dispatch(showWindow('CONFIRM_DELETE_FOREVER'))
    }

    return <StyledTrashWarning>
        <div className='info-box'>
            <div className="icon"><IconInfo $color='dark' /></div>

            Elementy znajdujące się w koszu będą automatycznie usuwane na zawsze po upływie 30 dni.
        </div>

        {
            !isTrashEmpty && <div>
                <Button $variant='wrong' onClick={handleEmptyTrash}>
                    <IconTrash />

                    <span className="label">Opróżnij kosz</span>
                </Button>
            </div>
        }
    </StyledTrashWarning>
}

export default TrashWarning