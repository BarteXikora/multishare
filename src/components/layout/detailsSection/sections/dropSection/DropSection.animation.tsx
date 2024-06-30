import { ReactNode } from 'react'

import { motion } from 'framer-motion'

const AnimatedDropSection = ({ children }: { children: ReactNode }) => {
    return <motion.div
        className='animated-div'
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ duration: .1, ease: 'easeInOut' }}
    >

        {children}
    </motion.div>
}

export default AnimatedDropSection