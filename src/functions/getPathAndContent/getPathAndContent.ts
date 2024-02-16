import { contentType, contentDisplayType, pathType } from "../../store/features/contentSlice/contentSlice.types"

type getPathAndContentType = {
    path: pathType,
    content: contentDisplayType
}

const getPathAndContent = (content: contentType, id: number): getPathAndContentType => {
    let currentContent: contentDisplayType = false

    const findNext = (obj: contentType): pathType => {
        const found: pathType = []

        if (obj && obj.folders && obj.folders.length > 0) {
            for (const folder of obj.folders) {
                if (folder.id === id) {
                    found.push({ id: folder.id, name: folder.name })

                    currentContent = folder.content && {
                        folders: folder.content.folders?.map(f => {
                            return ({
                                ...f,
                                insideContent: {
                                    folders: (f.content && f.content.folders) ? f.content.folders.length : 0,
                                    files: (f.content && f.content.files) ? f.content.files.length : 0
                                }
                            })
                        }),
                        files: folder.content.files
                    }

                } else {
                    const next = findNext(folder.content)

                    if (next.length > 0) {
                        found.push(...next, { id: folder.id, name: folder.name })
                    }
                }
            }
        }

        return found
    }

    const path: pathType = findNext(content).reverse()

    return { path, content: currentContent }
}

export default getPathAndContent