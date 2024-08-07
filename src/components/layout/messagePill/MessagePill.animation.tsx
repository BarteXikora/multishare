import { ReactNode } from 'react'

import StyledMessagePill from './MessagePill.styles'
import { motion } from 'framer-motion'

const AnimatedMessagePill = ({ children }: { children: ReactNode }) => {
    const AnimatedComponent = motion(StyledMessagePill)

    return <AnimatedComponent
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: .1, ease: 'easeInOut' }}
    >

        {children}
    </AnimatedComponent>
}

export default AnimatedMessagePill