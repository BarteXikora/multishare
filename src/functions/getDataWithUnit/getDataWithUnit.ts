const getDataWithUnit = (data: number): string => {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
    let currentUnit = 0

    while (data / 1024 >= 1) {
        data = Math.round(data / 1024 * 10) / 10
        currentUnit++
    }

    return data + ' ' + (currentUnit <= units.length && units[currentUnit])
}

export default getDataWithUnit