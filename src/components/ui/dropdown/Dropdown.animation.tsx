import { ReactNode } from 'react'

import { motion } from 'framer-motion'

const AnimatedDropdownContent = ({ children }: { children: ReactNode }) => {
    return <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: .1, ease: 'easeInOut' }}
    >

        {children}
    </motion.div>
}

export default AnimatedDropdownContent