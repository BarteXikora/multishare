import { contentType, contentDisplayType, pathType } from "../../store/features/contentSlice/contentSlice.types"

type getPathAndContentType = {
    path: pathType,
    content: contentDisplayType
}

const getPathAndContent = (content: contentType, id: number): getPathAndContentType => {
    let currentContent: contentDisplayType = { folders: [], files: [], notFound: true }

    const findNext = (obj: contentType): pathType => {
        const found: pathType = []

        if (obj.folders.length > 0) {
            for (const folder of obj.folders) {
                if (folder.id === id) {
                    found.push({ id: folder.id, name: folder.name })

                    currentContent = folder.content && {
                        folders: folder.content.folders.map(f => {
                            return ({
                                ...f,
                                insideContent: {
                                    folders: f.content.folders ? f.content.folders.length : 0,
                                    files: f.content.files ? f.content.files.length : 0
                                }
                            })
                        }),
                        files: folder.content.files,
                        notFound: false
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

    if (currentContent.notFound) path.push({ id: -2, name: 'Nie znaleziono folderu' })

    return { path, content: currentContent }
}

export default getPathAndContent