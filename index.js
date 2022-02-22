'use strict'

const fs = require('fs')

const { checkWiki } = require('./src/travelling-merchant.js');

(async function() {
    const itemList = fs.readFileSync('items.txt').toString().split(/\r?\n/)
    await Promise.all(itemList.map(async (item) => {
        if (!item) return
        let result
        try {
            result = await checkWiki(item)
        } catch (e) {
            console.error(`Failed to check wiki for ${item}:\n`, e)
        }
        return result
    }))
})()
