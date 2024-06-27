import AnimatedStar from './Star.animation'
import { AnimatePresence } from 'framer-motion'

import { IconStarSpecial } from '../../ui/icon/Icons'

const Star = ({ isStar }: { isStar: boolean }) => {
    return <AnimatePresence>
        {
            isStar && <AnimatedStar>
                <IconStarSpecial />
            </AnimatedStar>
        }
    </AnimatePresence>
}

export default Star