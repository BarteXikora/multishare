import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import useScreenSize from '../../../functions/useScreenSize/useScreenSize'

const AnimatedDetailsSction = ({ children }: { children: ReactNode }) => {
    const { screenNumberSize } = useScreenSize()

    return <motion.div
        className='animated-content'
        initial={screenNumberSize < 4 && { x: 350 }}
        animate={screenNumberSize < 4 && { x: 0 }}
        exit={{ x: 350 }}
        transition={{ duration: .1, animate: { ease: 'easeOut' }, exit: { ease: 'easeIn' } }}
    >

        {children}
    </motion.div>
}

export default AnimatedDetailsSction