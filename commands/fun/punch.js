const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'punch', // Optional
  category: 'Fun',
  description: 'punch someone',
  minArgs: 1,
  aliases: ['soco', 'socao', 'murro'],
  expectedArgs: '<@user>',
  callback: async ({ message }) => {
    let pGifs = [
      `https://i.pinimg.com/originals/f3/ec/8c/f3ec8c256cb22279c14bfdc48c92e5ab.gif`,
      ,
      `https://media.tenor.co/videos/e84c556455d1d3d0ed77064e3f9bcfa2/mp4`,
      `https://media.tenor.com/videos/015c89cf9b9f18a6df3635c8dad9de10/mp4`,
      `https://media.tenor.com/videos/7e512a4b1f6205c15ed832a7a991e001/mp4`,
      `https://media.tenor.com/videos/2321fbe48cbc2e11561a8b9553b4d2e2/mp4`,
      `https://media.tenor.com/videos/221cb2ff1c6949077ff93ce349b7fa31/mp4`,
      `https://media.tenor.com/videos/0550b5d0c8b25a9bf92485bfbae684bc/mp4`,
      `https://media.tenor.com/videos/239a187bb95ffdf7f0c785fe1156ee90/mp4`,
    ]

    const target = message.mentions.users.first()

    let gif = pGifs[Math.floor(Math.random() * pGifs.length)]

    let pEmbed = new MessageEmbed()
      .setDescription(`${message.author.username} socou ${target}!`)
      .setColor('#e0045e')
      .setImage(`${gif}`)
      .setTimestamp()
    message.channel.send(pEmbed)
  },
}
