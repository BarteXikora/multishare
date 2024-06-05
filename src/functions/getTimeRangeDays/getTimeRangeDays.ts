const getTimeRangeDays = (days: number): { from: Date, to: Date } => {
    let response = { from: new Date(), to: new Date() }

    response.from.setDate(response.from.getDate() - days)

    return response
}

export default getTimeRangeDays