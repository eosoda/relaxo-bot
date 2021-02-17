const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'ajuda', // Optional
  category: 'Misc',
  description: 'ajuda',
  callback: async ({ client, message }) => {
    const helpEmbed = new MessageEmbed()
      .setColor('#ffb0f1')
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setTitle('Lista de Comandos')
      .addField(
        'Instant Interaction Commands:',
        '`!morning` , `!evening` , `!feed`'
      )
      .addField(
        'Scheduled Interaction Commands:',
        '`!morning set` , `!evening set`'
      )
      .addField(
        'View Messages Commands:',
        '`!morning all` , `!evening all` , `!feed all`'
      )
      .addField(
        'Message Customization Commands:',
        '`!morning add` , `!morning remove` , `!evening add` , `!evening remove` , `!feed add` , `!feed remove`'
      )
      .addField(
        'Avatar Commands:',
        '`!rem` , `!asuna` , `!nezuko` , `!zero two`'
      )
    message.channel.send(helpEmbed)
  },
}
