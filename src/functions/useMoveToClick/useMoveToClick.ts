import { useEffect } from 'react'

const getContainerEnd = (element: HTMLElement): number => {
    let parent: HTMLElement | null = element.parentElement

    while (parent) {
        const style = window.getComputedStyle(parent)

        if (style.position === 'relative') return parseFloat(style.width)

        parent = parent.parentElement
    }

    return 0
}

const useMoveToClick = (ref: React.RefObject<any>) => {
    const handleClick = (e: MouseEvent) => {
        if (!ref.current) return

        const contextMenuStyles = window.getComputedStyle(ref.current)

        let top = e.clientY
        if (top + parseFloat(contextMenuStyles.height) >= window.innerHeight)
            top -= parseFloat(contextMenuStyles.height)

        let left = e.clientX
        if (left + parseFloat(contextMenuStyles.width) >= getContainerEnd(ref.current))
            left -= parseFloat(contextMenuStyles.width)

        ref.current.style.top = top + 'px'
        ref.current.style.left = left + 'px'
    }

    useEffect(() => {
        window.addEventListener('contextmenu', handleClick)

        return () => window.removeEventListener('contextmenu', handleClick)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useMoveToClick