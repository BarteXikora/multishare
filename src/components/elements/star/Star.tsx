/** 
 * Star; animated star icon
**/

import AnimatedStar from './Star.animation'
import { AnimatePresence } from 'framer-motion'

import { IconStarSpecial } from '../../ui/icon/Icons'

const Star = ({ isStar }: { isStar: boolean }) => {

    // Rendering the component:
    return <AnimatePresence>
        {
            isStar && <AnimatedStar>
                <IconStarSpecial />
            </AnimatedStar>
        }
    </AnimatePresence>
}

export default Star