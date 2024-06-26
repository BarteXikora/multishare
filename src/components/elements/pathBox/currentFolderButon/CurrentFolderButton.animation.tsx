import { ReactNode } from 'react'

import { motion } from 'framer-motion'

const AnimatedCurrentFolderButton = ({ children }: { children: ReactNode }) => {
    return <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0, position: 'absolute' }}
        transition={{ duration: .1, ease: 'easeOut' }}
    >

        {children}
    </motion.div>
}

export default AnimatedCurrentFolderButton