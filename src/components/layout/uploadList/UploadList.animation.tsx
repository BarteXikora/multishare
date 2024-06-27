import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export const AnimatedUploadMainList = ({ children }: { children: ReactNode }) => {
    return <motion.div
        initial={{ height: 0 }}
        animate={{ height: 150 }}
        exit={{ height: 0 }}
        transition={{ duration: .1, ease: 'easeInOut' }}
    >

        {children}
    </motion.div>
}