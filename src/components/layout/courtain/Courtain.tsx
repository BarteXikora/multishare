import { useSelector, useDispatch } from '../../../store/store'
import { toggle } from '../../../store/features/sideMenuSlice/sideMenuSlice'

import StyledCourtain from './Courtain.styles'

const Courtain = () => {
    const isShown = useSelector(state => state.sideMenu.isShown)
    const dispatch = useDispatch()

    return <StyledCourtain
        className={`${isShown ? 'shown' : ''}`}
        onClick={() => dispatch(toggle(false))}

    ></StyledCourtain>
}

export default Courtain