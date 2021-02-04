// File name: "music.js"
// Folder: "./features"
const distube = require('distube')

module.exports = (client, instance) => {
  client.once('ready', () => {
    distube.on('error', (message, error) => {
      message.channel.send(`An error encoutered: ${error}`)
    })
  })
}

module.exports.config = {
  displayName: 'Music Config', // Can be changed any time
}
