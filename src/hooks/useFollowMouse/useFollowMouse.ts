/** 
 * useFollowMouse custom hook
 * 
 * It is used to set the ref object position to the current mouse position on mouse move 
 * (to follow the mouse).  
**/

import { useEffect, useRef } from 'react'

const useFollowMouse = () => {

    // Creating the ref:
    const elementRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {

        // Handling setting css position of the ref obejct to the cursor position:
        const handleMouseMove = (e: MouseEvent) => {
            if (!elementRef.current) return

            elementRef.current.style.top = e.clientY + 'px'
            elementRef.current.style.left = e.clientX + 'px'
        }

        // Creating the global mouse move event: 
        window.addEventListener('mousemove', handleMouseMove)

        // Clering the global mouse move event: 
        return () => window.removeEventListener('mousemove', handleMouseMove)

    }, [])

    // Returning the ref:
    return elementRef
}

export default useFollowMouse