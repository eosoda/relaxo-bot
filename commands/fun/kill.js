const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'kill', // Optional
  category: 'Fun',
  description: 'Kill someone',
  callback: async ({ message }) => {
    const img = await randomPuppy(random)
    const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setImage(img)
      .setTitle(`From /r/${random}`)
    message.channel.send(embed)
  },
}
