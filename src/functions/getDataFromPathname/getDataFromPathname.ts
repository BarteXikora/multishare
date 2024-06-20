type dataType = {
    page: string | null
    projectId: number | null
    data: string | null
}

const getDataFromPathname = (pathname: string): dataType => {
    const pathnameData = pathname.substring(1, pathname.length).split('/')

    return {
        page: pathnameData[0] || null,
        projectId: Number(pathnameData[1]) || null,
        data: pathnameData[2] || null
    }
}

export default getDataFromPathname