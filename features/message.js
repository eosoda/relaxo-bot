// File name: "message.js"
// Folder: "./features"

module.exports = (client) => {
  client.on('message', (message) => {
    if (message.author.bot) return //Ignore other bots
    if (message.channel.type == 'DM') return //Ignore DM's

    //   if (message.author.bot) {
    //     console.log('bot falou')
    //   }

    // const suggestionsChannel = message.guild.channels.cache.get('put channel id here')
    // if (message.channel === suggestionsChannel) {
    //         if (message.author.bot) return
    //         message.delete({ timeout: 1000 })

    //         const Embed = MessageEmbed()
    //         .setAuthor(message.author.tag, message.author.displayAvatarURL())
    //         .setDescription(`${message.content}\n\n📊 Use the reactions below to vote!`)
    //         .setFooter('Want to suggest something? Type it here!')
    //         .setColor(3426654)
    //         message.channel.send(Embed).then(message => {
    //             message.react('👍')
    //             .then(() => message.react('👎'))
    //         })
    // }
  })
}

module.exports.config = {
  displayName: 'Message', // Can be changed any time
}
