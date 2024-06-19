import { useEffect, useRef } from 'react'
import getParentPosition, { coordinatesType } from '../getParentPosition/getParentPosition'

const useFollowMouse = () => {
    const elementRef = useRef<HTMLDivElement | null>(null)
    const parentOffset = useRef<coordinatesType | null>(null)

    const handleMouseMove = (e: MouseEvent) => {
        if (!elementRef.current) return
        parentOffset.current = getParentPosition(elementRef.current as HTMLElement)

        elementRef.current.style.top = (e.clientY - parentOffset.current.y) + 'px'
        elementRef.current.style.left = (e.clientX - parentOffset.current.x) + 'px'
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)

        return () => window.removeEventListener('mousemove', handleMouseMove)

    }, [])

    return elementRef
}

export default useFollowMouse