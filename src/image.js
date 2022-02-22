'use strict'

const fs = require('fs')
const path = require('path')

function downloadImage(url, path) {
    return new Promise((resolve, reject) => {
        const https = require('https')
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(path))
                    .once('close', resolve)
            }
        })
    })
}

module.exports = {
    imagePath: async (itemName) => {
        const imageName = `${itemName}.png`
        const imagePath = path.join(__dirname, '..', 'resources', `${imageName}`)
        try {
            fs.accessSync(imagePath)
        } catch (e) {
            const imgUrl = `https://runescape.wiki/images/${imageName}`
            await downloadImage(imgUrl, imagePath)
        }
        return imagePath
    }
}
