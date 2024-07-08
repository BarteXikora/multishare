/**
 * useMoveToClick custom hook
 * 
 * This hook manages the positioning of a context menu based on the user's click event.
 * It calculates the optimal position for the context menu to avoid overflowing the viewport.
 */

import { useEffect } from 'react'

// Find the nearest parent with relative positioning:
const getContainerEnd = (element: HTMLElement): number => {
    let parent: HTMLElement | null = element.parentElement

    while (parent) {
        const style = window.getComputedStyle(parent)

        if (style.position === 'relative') return parseFloat(style.width)

        parent = parent.parentElement
    }

    return 0
}

// The hook:
const useMoveToClick = (ref: React.RefObject<any>) => {
    const handleClick = (e: MouseEvent) => {
        if (!ref.current) return

        // Get computed styles for the context menu:
        const contextMenuStyles = window.getComputedStyle(ref.current)

        // Calculate top position:
        let top = e.clientY
        if (top + parseFloat(contextMenuStyles.height) >= window.innerHeight)
            top -= parseFloat(contextMenuStyles.height)

        // Calculate left position:
        let left = e.clientX
        if (left + parseFloat(contextMenuStyles.width) >= getContainerEnd(ref.current))
            left -= parseFloat(contextMenuStyles.width)

        // Set the updated position:
        ref.current.style.top = top + 'px'
        ref.current.style.left = left + 'px'
    }

    useEffect(() => {

        // Listening for contextmenu events:
        window.addEventListener('contextmenu', handleClick)

        // Cleaning up event listener:
        return () => window.removeEventListener('contextmenu', handleClick)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useMoveToClick