/**
 * getShortenName function
 * 
 * This function shortens a given string to a specified maximum length and appends a specified ending if shortened.
 * If the name is already within the maximum length, it returns the original name.
 **/

const getShortenName = (
    name: string,
    maxLength: number,
    shortenEnding: string = '...'
) => {

    // Returning the original name if its length is within the maximum length:
    if (name.length <= maxLength) return name

    // Shortening the name to fit within the maximum length minus the length of the ending:
    let shortName = name.substring(0, maxLength - shortenEnding.length)

    // Removing trailing spaces from the shortened name:
    while (shortName.length > 0 && shortName[shortName.length - 1] === ' ')
        shortName = shortName.substring(0, shortName.length - 1)

    // Returning the shortened name with the appended ending:
    return shortName + shortenEnding
}

export default getShortenName