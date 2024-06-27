import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import useScreenSize from '../../../functions/useScreenSize/useScreenSize'

const AnimatedSideMenu = ({ children }: { children: ReactNode }) => {
    const { screenNumberSize } = useScreenSize()

    return <motion.div
        className='animated-content'
        initial={screenNumberSize < 3 && { x: -300 }}
        animate={screenNumberSize < 3 && { x: 0 }}
        exit={{ x: -300 }}
        transition={{ duration: .1, animate: { ease: 'easeOut' }, exit: { ease: 'easeIn' } }}
    >

        {children}
    </motion.div>
}

export default AnimatedSideMenu