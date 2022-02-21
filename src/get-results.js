'use strict'

const https = require('https')

module.exports = {
    makeRequest: async (url) => {
        return new Promise((resolve, reject) => {
            const req = https.request(url, (res) => {
                let result = ''

                res.on('data', (d) => {
                    result += d.toString()
                })

                res.on('end', () => {
                    resolve(result)
                })
            })

            req.on('error', (err) => {
                console.error(error)
            })

            req.end()
        })
    }
}
