import { displayTypeType } from '../../store/features/contentSlice/contentSlice.types'

type dataType = {
    page: string | null
    projectId: number | null
    data: string | null
    displayType: displayTypeType | null
}

const getDataFromPathname = (pathname: string): dataType => {
    const pathnameData = pathname.substring(1, pathname.length).split('/')

    let displayType: displayTypeType | null = null

    if (/\/files/.test(pathname)) displayType = 'FILES'
    if (/\/trash/.test(pathname)) displayType = 'TRASH'
    if (/\/project/.test(pathname)) displayType = 'TREE'

    return {
        page: pathnameData[0] || null,
        projectId: Number(pathnameData[1]) || null,
        data: pathnameData[2] || null,
        displayType
    }
}

export default getDataFromPathname