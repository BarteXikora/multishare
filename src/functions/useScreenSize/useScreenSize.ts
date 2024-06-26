import { useState, useEffect } from 'react'
import defaultTheme from '../../theme/defaultTheme'

export type screenSizeNumberType = 0 | 1 | 2 | 3 | 4
export type screenSizeType = 'S' | 'M' | 'T' | 'D' | 'X'

const useScreenSize = () => {
    const getScreenSize = (): screenSizeNumberType => {
        const width = window.innerWidth
        let currentScreenSize: screenSizeNumberType = 4

        if (width <= Number.parseFloat(defaultTheme.screenBreakpoints.smallerMobile)) currentScreenSize = 0
        else if (width <= Number.parseFloat(defaultTheme.screenBreakpoints.mobile)) currentScreenSize = 1
        else if (width <= Number.parseFloat(defaultTheme.screenBreakpoints.tablet)) currentScreenSize = 2
        else if (width <= Number.parseFloat(defaultTheme.screenBreakpoints.desktop)) currentScreenSize = 3

        return currentScreenSize
    }

    const getSize = (size: screenSizeNumberType): screenSizeType => {
        if (size === 0) return 'S'
        if (size === 1) return 'M'
        if (size === 2) return 'T'
        if (size === 3) return 'D'

        return 'X'
    }

    const [screenSize, setScreenSize] = useState<screenSizeType>(getSize(getScreenSize()))
    const [screenNumberSize, setScreenNumberSize] = useState<screenSizeNumberType>(getScreenSize())

    useEffect(() => {
        const handleResize = () => {
            setScreenNumberSize(getScreenSize())
            setScreenSize(getSize(getScreenSize()))
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { screenSize, screenNumberSize }
}

export default useScreenSize