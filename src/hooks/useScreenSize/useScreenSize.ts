/**
 * useScreenSize custom hook
 * 
 * Manages screen size detection and provides information about the current screen size.
 * Calculates the screen size based on window width and breakpoints defined in the theme.
 * It returns the current screen size (e.g., 'S', 'M', 'T', 'D', or 'X') or its corresponding
 * numeric value (0 to 4).
 */

import { useState, useEffect } from 'react'
import defaultTheme from '../../theme/defaultTheme'

// Responses types:
export type screenSizeNumberType = 0 | 1 | 2 | 3 | 4
export type screenSizeType = 'S' | 'M' | 'T' | 'D' | 'X'

const useScreenSize = () => {

    // Calculating the current screen size based on window width:
    const getScreenSize = (): screenSizeNumberType => {
        const width = window.innerWidth
        let currentScreenSize: screenSizeNumberType = 4

        if (width <= Number.parseFloat(defaultTheme.screenBreakpoints.smallerMobile)) currentScreenSize = 0
        else if (width <= Number.parseFloat(defaultTheme.screenBreakpoints.mobile)) currentScreenSize = 1
        else if (width <= Number.parseFloat(defaultTheme.screenBreakpoints.tablet)) currentScreenSize = 2
        else if (width <= Number.parseFloat(defaultTheme.screenBreakpoints.desktop)) currentScreenSize = 3

        return currentScreenSize
    }

    // Converting numeric screen size to its corresponding letter (e.g., 0 -> 'S'):
    const getSize = (size: screenSizeNumberType): screenSizeType => {
        if (size === 0) return 'S'
        if (size === 1) return 'M'
        if (size === 2) return 'T'
        if (size === 3) return 'D'

        return 'X'
    }

    // Initializing state for screen size and numeric value:
    const [screenSize, setScreenSize] = useState<screenSizeType>(getSize(getScreenSize()))
    const [screenNumberSize, setScreenNumberSize] = useState<screenSizeNumberType>(getScreenSize())

    // Listening for window resize events and update screen size accordingly:
    useEffect(() => {
        const handleResize = () => {
            setScreenNumberSize(getScreenSize())
            setScreenSize(getSize(getScreenSize()))
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Returning values:
    return { screenSize, screenNumberSize }
}

export default useScreenSize
