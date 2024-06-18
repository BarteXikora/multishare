import { useEffect, useRef } from 'react'

type coordinatesType = { x: number, y: number }

const getParentPosition = (element: HTMLElement): coordinatesType => {
    let parent: HTMLElement | null = element.parentElement
    let result: coordinatesType = { x: 0, y: 0 }

    while (parent) {
        const style = window.getComputedStyle(parent)

        if (style.position === 'relative') {
            result.x += parent.offsetLeft
            result.y += parent.offsetTop
        }

        parent = parent.parentElement
    }

    return result
}

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