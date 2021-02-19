const { MessageEmbed } = require('discord.js')

let pGifs = [
  `https://i.pinimg.com/originals/f3/ec/8c/f3ec8c256cb22279c14bfdc48c92e5ab.gif`,
  `https://media2.giphy.com/media/AlsIdbTgxX0LC/giphy.gif`,
  `https://i.pinimg.com/originals/d7/c3/0e/d7c30e46a937aaade4d7bc20eb09339b.gif`,
  `https://i2.kym-cdn.com/photos/images/original/000/989/495/3b8.gif`,
  `https://media.tenor.co/videos/e84c556455d1d3d0ed77064e3f9bcfa2/mp4`,
]

module.exports = {
  name: 'punch', // Optional
  category: 'Fun',
  description: 'punch someone',
  minArgs: 0,
  maxArgs: 1,
  expectedArgs: '<@user>',
  callback: async ({ message, args }) => {
    const target = message.mentions.users.first()

    if (!target) return message.reply(`you can't punch yourself!`)

    let gif = pGifs[Math.floor(Math.random() * pGifs.length)]

    let arg = message.mentions.users.first()
    let pEmbed = new MessageEmbed()
      .setDescription(`${message.author.username} just punched ${target}!`)
      .setColor('#e0045e')
      .setImage(`${gif}`)
      .setTimestamp()
    message.channel.send(pEmbed)
  },
}
