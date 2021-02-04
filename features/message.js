// File name: "message.js"
// Folder: "./features"

module.exports = (client, instance) => {
  client.on('message', (message) => {
    if (message.author.bot) {
      console.log('bot falou')
    }
  })
}

module.exports.config = {
  displayName: 'Message Config', // Can be changed any time
}
