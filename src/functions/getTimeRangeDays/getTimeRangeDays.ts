/**
 * getTimeRangeDays function
 * 
 * This function calculates a date range from the current date to a specified number of days in the past.
 * It returns an object containing the start date ('from') and the end date ('to').
 **/

const getTimeRangeDays = (days: number): { from: Date, to: Date } => {

    // Initializing the response object with the current date for both 'from' and 'to' properties:
    let response = { from: new Date(), to: new Date() }

    // Adjusting the 'from' date by subtracting the specified number of days:
    response.from.setDate(response.from.getDate() - days)

    // Returning the date range object:
    return response
}

export default getTimeRangeDays