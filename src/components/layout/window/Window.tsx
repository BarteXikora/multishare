import { useSelector, useDispatch } from '../../../store/store'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import StyledWindow from './Window.styles'
import Button from '../../ui/button/Button'

import iconClose from '../../../assets/icons/icon-close.svg'

const Window = () => {
    const dispatch = useDispatch()

    const window = useSelector(state => state.window)

    if (!window.isShown) return null

    return <StyledWindow>
        <div className="container">
            <div className="bar">
                <h2>Tytuł okna</h2>

                <Button $variant='wrong' className='close-button' onClick={() => dispatch(closeWindow())}>
                    <img src={iconClose} alt='Zamknij okno' />
                </Button>
            </div>

            <div className="content">
                {window.content || <>Error</>}
            </div>
        </div>
    </StyledWindow>
}

export default Window