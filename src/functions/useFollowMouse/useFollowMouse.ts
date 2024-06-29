import { useEffect, useRef } from 'react'

const useFollowMouse = () => {
    const elementRef = useRef<HTMLDivElement | null>(null)

    const handleMouseMove = (e: MouseEvent) => {
        if (!elementRef.current) return

        elementRef.current.style.top = e.clientY + 'px'
        elementRef.current.style.left = e.clientX + 'px'
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)

        return () => window.removeEventListener('mousemove', handleMouseMove)

    }, [])

    return elementRef
}

export default useFollowMouse