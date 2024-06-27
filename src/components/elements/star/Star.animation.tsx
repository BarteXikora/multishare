import { ChildrenProps } from '../../../utilities/types'
import { motion } from 'framer-motion'

const AnimatedStar = ({ children }: ChildrenProps) => {
    return <motion.div
        className='star'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .1 }}
    >

        {children}
    </motion.div>
}

export default AnimatedStar