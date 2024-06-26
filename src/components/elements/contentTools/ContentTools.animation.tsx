import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import useScreenSize from '../../../hooks/useScreenSize/useScreenSize'

const AnimatedContentTools = ({ children }: { children: ReactNode }) => {
    const { screenNumberSize } = useScreenSize()

    return <motion.div
        className='animated-div'
        initial={{
            x: screenNumberSize === 4 ? 5 : screenNumberSize > 1 ? -5 : 0,
            y: screenNumberSize < 2 ? 5 : 0,
            opacity: 0
        }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: .1, ease: 'easeInOut' }}
    >

        {children}
    </motion.div>
}

export default AnimatedContentTools