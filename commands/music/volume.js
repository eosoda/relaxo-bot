const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'volume', // Optional
  category: 'Music',
  description: 'Aumenta ou diminui o volume',
  aliases: 'vol',
  // minArgs: 1,
  expectedArgs: '<qtd>',
  callback: async ({ client, message, args, song }) => {
    const queue = client.distube.getQueue(message)

    if (!queue) {
      let noMusic = new MessageEmbed()
        .setDescription(`${client.emotes.error} | Nenhuma Música na fila!`)
        .setTitle('Server Volume Manager')
        .setColor('BLUE')
      return message.channel.send(noMusic)
    }

    const volume = parseInt(args[0])
    if (isNaN(volume)) {
      return message.channel.send(
        `${client.emotes.error} | Insira um número valido!`
      )
    }

    client.distube.setVolume(message, volume)
    let vol = new MessageEmbed()
      .setDescription(
        `${client.emotes.success} Volume ajustado para: **${volume}/100**`
      )
      .setTitle('Server Volume Manager')
      .setFooter(
        `Set by: ${message.author.username}`,
        message.author.avatarURL()
      )
      .setColor('BLUE')
    return message.channel.send(vol)
    // message.channel.send(
    //   `${client.emotes.success} | Volume ajustado para \`${volume}\``
    // )
  },
}
