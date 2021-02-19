// File name: "message.js"
// Folder: "./features"

module.exports = (client) => {
  client.on('message', (message) => {
    if (message.author.bot) return //Ignore other bots
    if (message.channel.type == 'DM') return //Ignore DM's

    //   if (message.author.bot) {
    //     console.log('bot falou')
    //   }
  })
}

module.exports.config = {
  displayName: 'Message', // Can be changed any time
}
