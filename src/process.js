'use strict'

function splitDate(toSplit) {
    return [toSplit.getYear(),
            toSplit.getMonth(),
            toSplit.getDate()]
}

module.exports = {
    processResults: (resultsToProcess) => {
        const [ currentYear, currentMonth, currentDate ] = splitDate(new Date())

        const matchedResults = resultsToProcess.filter((result) => {
            const [ resultYear, resultMonth, resultDate ] = splitDate(result)
            return (currentYear === resultYear &&
                    currentMonth === resultMonth &&
                    currentDate === resultDate)
        })

        return !!matchedResults.length
    }
}
