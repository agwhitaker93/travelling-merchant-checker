'use strict'

const { exec } = require('child_process')

let startCmd = 'xdg-start'
if (process.platform === 'darwin') {
    startCmd = 'open'
}
if (process.platform === 'win32') {
    startCmd = 'start'
}

module.exports = {
    openWebPage: (url) => {
        exec(`${startCmd} ${url}`)
    }
}
