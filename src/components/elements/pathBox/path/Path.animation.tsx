import { motion } from 'framer-motion'
import { ChildrenProps } from '../../../../utilities/types'

const AnimatedPathFragment = ({ children }: ChildrenProps) => {
    return <motion.div
        className='path-fragment'
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -10, opacity: 0 }}
        transition={{
            duration: .1,
            animate: { ease: 'easeOut' },
            exit: { ease: 'easeIn' }
        }}
    >

        {children}
    </motion.div>
}

export default AnimatedPathFragment