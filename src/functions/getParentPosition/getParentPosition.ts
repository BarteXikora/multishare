export type coordinatesType = { x: number, y: number }

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

export default getParentPosition