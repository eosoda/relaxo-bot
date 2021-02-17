const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'highlight', // Optional
  category: 'Misc',
  minArgs: 0,
  description: 'Highlight a message',
  aliases: 'hl',
  callback: ({ message, args }) => {
    message.delete()

    if (!args.join(' ')) {
      return message.channel.send(
        ':x: ' + '| Please Enter Something For The Bot To Highligh With Syntax'
      )
    }
    message.channel.send('```' + args.join(' ') + '```')
  },
}
