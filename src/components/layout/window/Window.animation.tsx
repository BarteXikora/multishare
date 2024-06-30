import { ReactNode } from 'react'
import StyledWindow from './Window.styles'
import { motion } from 'framer-motion'
import useScreenSize from '../../../hooks/useScreenSize/useScreenSize'

const AnimatedWindow = ({ children }: { children: ReactNode }) => {
    const AnimatedComponent = motion(StyledWindow)

    const { screenSize } = useScreenSize()

    return <AnimatedComponent
        initial={{ y: screenSize === 'S' ? 0 : 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: screenSize === 'S' ? 0 : -10, opacity: 0 }}
        transition={{ duration: .1, ease: 'easeInOut' }}
    >

        {children}
    </AnimatedComponent>
}

export default AnimatedWindow