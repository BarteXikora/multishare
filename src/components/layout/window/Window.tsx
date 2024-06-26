import { useState, useEffect, ReactNode } from 'react'
import { useSelector, useDispatch } from '../../../store/store'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'
import windowTypes from '../../../functions/windowTypes/windowTypes'

import StyledWindow from './Window.styles'
import Button from '../../ui/button/Button'
import { IconClose } from '../../ui/icon/Icons'

const Window = () => {
    const dispatch = useDispatch()

    const window = useSelector(state => state.window)

    const [windowTitle, setWindowTitle] = useState<string>('')
    const [windowBody, setWindowBody] = useState<ReactNode | null>(null)

    useEffect(() => {
        if (!window.window) return

        setWindowTitle(windowTypes[window.window].title)
        setWindowBody(windowTypes[window.window].body)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.window])

    if (!window.isShown) return null

    return <StyledWindow>
        <div className="container">
            <div className="bar">
                <h2>{windowTitle}</h2>

                <Button $variant='wrong' $size='big' className='close-button' onClick={() => dispatch(closeWindow())}>
                    <IconClose />
                </Button>
            </div>

            <div className="content">
                {windowBody || <>Error</>}
            </div>
        </div>
    </StyledWindow>
}

export default Window