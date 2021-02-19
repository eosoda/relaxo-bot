const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'coinflip', // Optional
  category: 'Fun',
  description: 'Cara ou Coroa',
  aliases: 'coin',
  callback: async ({ message }) => {
    const n = Math.floor(Math.random() * 2)
    let result
    if (n === 1) result = 'cara'
    else result = 'coroa'
    const embed = new MessageEmbed()
      .setTitle('½  Cara ou Coroa  ½')
      .setDescription(
        `I flipped a coin for you, ${message.member}. It was **${result}**!`
      )
      .setFooter(
        message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
      .setColor('RANDOM')
    message.channel.send(embed)
  },
}
