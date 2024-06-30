import { ReactNode } from 'react'

import { motion } from 'framer-motion'

export const AnimatedIcon = ({ children }: { children: ReactNode }) => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .1, ease: 'easeInOut' }}
    >

        {children}
    </motion.div>
}

export const AnimatedTitle = ({ children }: { children: ReactNode }) => {
    return <motion.h2
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: .1, ease: 'easeOut' }}
    >

        {children}
    </motion.h2>
}
