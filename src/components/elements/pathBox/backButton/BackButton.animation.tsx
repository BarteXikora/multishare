import { ChildrenProps } from '../../../../utilities/types'
import { motion } from 'framer-motion'

const AnimatedBackButton = ({ children }: ChildrenProps) => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .1, ease: 'easeInOut' }}
    >

        {children}
    </motion.div>
}

export default AnimatedBackButton