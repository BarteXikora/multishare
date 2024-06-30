import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import useScreenSize from '../../../hooks/useScreenSize/useScreenSize'

const AnimatedSideMenu = ({ children }: { children: ReactNode }) => {
    const { screenNumberSize } = useScreenSize()

    return <motion.div
        className='animated-content'
        initial={screenNumberSize === 0 ? { x: '-100vw' } : screenNumberSize < 3 ? { x: -300 } : {}}
        animate={screenNumberSize < 3 && { x: 0 }}
        exit={screenNumberSize === 0 ? { x: '-100vw' } : { x: -300 }}
        transition={{ duration: .1, animate: { ease: 'easeOut' }, exit: { ease: 'easeIn' } }}
    >

        {children}
    </motion.div>
}

export default AnimatedSideMenu