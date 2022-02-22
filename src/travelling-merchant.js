'use strict'

const path = require('path')

const { Notifier } = require('./notify.js')
const { makeRequest } = require('./results.js')
const { parseResult } = require('./parse.js')
const { processResults } = require('./process.js')
const { openWebPage } = require('./webpage.js')
const { imagePath } = require('./image.js')

module.exports = {
    checkWiki: async (itemName) => {
        const joinedItemName = itemName.split(' ').join('_')
        const iconPath = await imagePath(joinedItemName)
        const wikiApiUrl = `https://runescape.wiki/api.php?action=parse&format=json&prop=text&page=${joinedItemName}`
        const wikiPageUrl = `https://runescape.wiki/w/${joinedItemName}`

        const notifier = new Notifier(iconPath)

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
