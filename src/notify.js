'use strict'

const { notify } = require('node-notifier')

const Notifier = function(iconPath) {
    this.icon = iconPath
}

Notifier.prototype.notify = function ({title,
                                       message,
                                       wait = false},
                                      clicked = () => {}) {
    notify({title,
            icon: this.icon,
            message,
            wait,
            sound: true},
           (err, res, meta) => {
               switch (meta.action) {
               case 'clicked':
                   clicked()
               }
           })
}

module.exports = {
    Notifier
}
