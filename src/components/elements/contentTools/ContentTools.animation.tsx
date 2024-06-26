import { useState, useEffect } from 'react'
import { ChildrenProps } from '../../../utilities/types'
import { motion } from 'framer-motion'
import defaultTheme from '../../../theme/defaultTheme'

type screenSizeType = 'X' | 'D' | 'M'

const AnimatedContentTools = ({ children }: ChildrenProps) => {
    const getScreenSize = (): screenSizeType => {
        const width = window.innerWidth
        let currentScreenSize: screenSizeType = 'X'

        console.log(Number.parseFloat(defaultTheme.screenBreakpoints.desktop), width)

        if (width <= Number.parseFloat(defaultTheme.screenBreakpoints.mobile)) currentScreenSize = 'M'
        else if (width <= Number.parseFloat(defaultTheme.screenBreakpoints.desktop)) currentScreenSize = 'D'

        return currentScreenSize
    }

    const [screenSize, setScreenSize] = useState<screenSizeType>(getScreenSize)

    useEffect(() => {
        const handleResize = () => setScreenSize(getScreenSize())

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <motion.div
        className='animated-div'
        initial={{
            x: screenSize === 'X' ? 5 : screenSize === 'D' ? -5 : 0,
            y: screenSize === 'M' ? 5 : 0,
            opacity: 0
        }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: .1, ease: 'easeInOut' }}
    >

        {children}
    </motion.div>
}

export default AnimatedContentTools