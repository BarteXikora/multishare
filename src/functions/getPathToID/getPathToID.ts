import { contentType, pathType } from "../../store/features/contentSlice/contentSlice.types"

const getPathToID = (content: contentType, id: number): pathType => {
    const findNext = (obj: contentType): pathType => {
        const found: pathType = []

        if (obj && obj.folders && obj.folders.length > 0) {
            for (const folder of obj.folders) {
                if (folder.id === id) found.push({ id: folder.id, name: folder.name })
                else {
                    const next = findNext(folder.content)

                    if (next.length > 0) {
                        found.push(...next, { id: folder.id, name: folder.name })
                    }
                }
            }
        }

        return found
    }

    const path: pathType = findNext(content)

    return path;
}

export default getPathToID