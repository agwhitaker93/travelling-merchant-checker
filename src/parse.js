'use strict'

const HTML = require('node-html-parser')

module.exports = {
    parseResult: (toParse) => {
        const json = JSON.parse(toParse)
        const text = json.parse.text['*']
        const html = HTML.parse(text)
        const tables = html.querySelectorAll('table')
        const tableWithRunedate = tables.filter((table) => table.toString().includes('Runedate'))[0]
        const realDates = tableWithRunedate
              .querySelectorAll('tr')
              .map((tableRow) => tableRow.querySelector('td'))
              .filter(toFilter => toFilter) // remove null
        return realDates.map((realDate) => new Date(realDate.innerText))
    }
}
