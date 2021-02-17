const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'avatar', // Optional
  category: 'Misc',
  description: 'Pega imagem do perfil',
  aliases: ['pic'],
  callback: async ({ message }) => {
    let member = message.mentions.users.first() || message.author

    let avatar = member.displayAvatarURL({ size: 1024 })

    const embed = new MessageEmbed()
      .setTitle(`${member.username} avatar`)
      .setImage(avatar)
      .setColor('RANDOM')

    message.channel.send(embed)
  },
}
