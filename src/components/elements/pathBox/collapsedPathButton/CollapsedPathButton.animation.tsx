import { ReactNode } from 'react'
import StyledCollapsedPathButton from './CollapsedPathButton.styles'

import { motion } from 'framer-motion'

const AnimatedCollapsedPathButton = ({ children }: { children: ReactNode }) => {
    const AnimatedComponent = motion(StyledCollapsedPathButton)

    return <AnimatedComponent
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: .1, ease: 'easeOut' }}
    >

        {children}
    </AnimatedComponent>
}

export default AnimatedCollapsedPathButton