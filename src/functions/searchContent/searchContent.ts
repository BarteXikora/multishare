import { contentDisplayType } from '../../store/features/contentSlice/contentSlice.types'

const searchContent = (content: contentDisplayType, search: string): contentDisplayType => {
    const currentContent: contentDisplayType = JSON.parse(JSON.stringify(content))

    const response: contentDisplayType = {
        folders: currentContent.folders.filter(f => f.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())),
        files: currentContent.files.filter(f => f.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    }

    return response
}

export default searchContent