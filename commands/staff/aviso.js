const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'aviso', // Optional
  aliases: ['avisar', 'anunciar'],
  guildOnly: true,
  category: 'Staff',
  description: 'Cria uma aviso.',
  // minArgs: 4,
  expectedArgs: '<title>, <desc>, <link>, <urlImage>',
  requiredPermissions: ['ADMINISTRATOR'],
  callback: ({ client, message, text }) => {
    if (message.author.bot) return
    const { member } = message
    const channel = member.guild.channels.cache.find(
      (ch) => ch.name === '📰┊avisos'
    )

    let argsS = text.slice(', ') //[title, description, link, image] //[0,1,2,3]

    let embed = new MessageEmbed()
      .setTitle(argsS[0])
      .setDescription(argsS[1])

      .addField('Text', true)
      .setThumbnail('')
      .setColor(0x00ae86)
    // .setFooter('Footer', argsS[3])
    setAuthor(
      `${message.author.username}`,
      message.author.displayAvatarURL
    ).setTimestamp()

    channel.send({ embed })
  },
}
