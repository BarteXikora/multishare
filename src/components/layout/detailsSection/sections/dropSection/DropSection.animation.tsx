import { motion } from 'framer-motion'
import { ChildrenProps } from '../../../../../utilities/types'

const AnimatedDropSection = ({ children }: ChildrenProps) => {
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