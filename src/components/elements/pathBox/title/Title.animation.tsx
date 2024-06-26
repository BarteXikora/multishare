import { ChildrenProps } from '../../../../utilities/types'
import { motion } from 'framer-motion'

export const AnimatedIcon = ({ children }: ChildrenProps) => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .1, ease: 'easeInOut' }}
    >

        {children}
    </motion.div>
}

export const AnimatedTitle = ({ children }: ChildrenProps) => {
    return <motion.h2
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: .1, ease: 'easeOut' }}
    >

        {children}
    </motion.h2>
}
