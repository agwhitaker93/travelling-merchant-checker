'use strict'

const path = require('path')

const { Notifier } = require('./notify.js')
const { makeRequest } = require('./get-results.js')
const { parseResult } = require('./parse.js')
const { processResults } = require('./process.js')
const { openWebPage } = require('./open-webpage.js')

module.exports = {
    checkWiki: async (itemName) => {
        const joinedItemName = itemName.split(' ').join('_')
        const iconPath = path.join(__dirname, '..', 'resources', `${joinedItemName}.png`)
        const wikiApiUrl = `https://runescape.wiki/api.php?action=parse&format=json&prop=text&page=${joinedItemName}`
        const wikiPageUrl = `https://runescape.wiki/w/${joinedItemName}`

        const notifier = new Notifier(iconPath)

        notifier.notify({
            title: `Checking ${itemName}`,
            message: `Performing check against wiki for ${itemName}`
        })

        const result = await makeRequest(wikiApiUrl)
        const parsed = parseResult(result)
        const hasResultForToday = processResults(parsed)

        if (hasResultForToday) {
            notifier.notify({
                title: `${itemName} available`,
                message: `${itemName} is available in the Travelling Merchant's Shop today!`,
                wait: true
            }, () => {
                openWebPage(wikiPageUrl)
            })
        }
    }
}
