/**
 * getDataWithUnit function
 * 
 * This function converts a data size in bytes to a human-readable format with appropriate units.
 * It handles the conversion by dividing the data size by 1024 until it is less than 1024,
 * and then appends the corresponding unit.
 */

const getDataWithUnit = (data: number): string => {

    // Defining the units for data size:
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
    let currentUnit = 0

    // Converting data size to the appropriate unit:
    while (data / 1024 >= 1) {
        data = Math.round(data / 1024 * 10) / 10
        currentUnit++
    }

    // Returning the formatted data size with the appropriate unit:
    return data + ' ' + (currentUnit <= units.length && units[currentUnit])
}

export default getDataWithUnit