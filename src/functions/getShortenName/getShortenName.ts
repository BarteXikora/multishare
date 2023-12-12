const getShortenName = (
    name: string,
    maxLength: number,
    shortenEnding: string = '...'

) => {

    if (name.length <= maxLength) return name

    let shortName = name.substring(0, maxLength - shortenEnding.length)

    while (shortName.length > 0 && shortName[shortName.length] === ' ')
        shortName = shortName.substring(0, shortName.length - 1)

    return shortName + shortenEnding
}

export default getShortenName