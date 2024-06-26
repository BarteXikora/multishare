import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const AnimatedPreviewSection = ({ children, type }: { children: ReactNode, type: 'ICON' | 'IMAGE' }) => {
    return <motion.div
        className='animated-div'
        initial={{ opacity: 0, y: type === 'ICON' ? 10 : 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .1, ease: 'easeOut' }}
    >

        {children}
    </motion.div>
}

export default AnimatedPreviewSection