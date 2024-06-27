import { useSelector, useDispatch } from '../../../store/store'
import { toggle as toggleSideMenu } from '../../../store/features/sideMenuSlice/sideMenuSlice'
import { toggle as toggleDetailsSection } from '../../../store/features/detailsSectionSlice/detailsSectionSlice'
import { closeWindow } from '../../../store/features/windowSlice/windowSlice'

import AnimatedCourtain from './Courtain.animation'
import { AnimatePresence } from 'framer-motion'

const Courtain = () => {
    const isSideMenuShown = useSelector(state => state.sideMenu.isShown)
    const isDetailsSectionShown = useSelector(state => state.detailsSection.isShown)
    const isWindowShown = useSelector(state => state.window.isShown)

    const dispatch = useDispatch()

    return <AnimatePresence>
        {
            (isSideMenuShown || isDetailsSectionShown || isWindowShown) && <AnimatedCourtain
                className={`
                    ${isDetailsSectionShown && 'shown-details-section'} 
                    ${isSideMenuShown && 'shown-side-menu'}
                    ${isWindowShown && 'shown-window'}
                `}

                onClick={() => {
                    dispatch(toggleSideMenu(false))
                    dispatch(toggleDetailsSection(false))
                    dispatch(closeWindow())
                }}
            />
        }
    </AnimatePresence>
}

export default Courtain