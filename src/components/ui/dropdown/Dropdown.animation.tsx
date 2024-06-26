import { motion } from 'framer-motion'
import { ChildrenProps } from '../../../utilities/types'

const AnimatedDropdownContent = ({ children }: ChildrenProps) => {
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