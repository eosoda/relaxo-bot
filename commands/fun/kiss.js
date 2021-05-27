const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'kiss', // Optional
  category: 'Fun',
  description: 'Kiss someone',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '<@user>',
  callback: async ({ message, args }) => {
    const user = message.mentions.users.first()
    const name = message.author.username
    let mesaj = args.slice(1).join(' ') || ' '

    let gifs = [
      'https://i.imgur.com/sGVgr74.gif',
      'https://i.imgur.com/TItLfqh.gif',
      'https://i.imgur.com/IgGumrf.gif',
      'https://i.imgur.com/e0ep0v3.gif',
      'https://i.imgur.com/So3TIVK.gif',
    ]
    let pick = gifs[Math.floor(Math.random() * gifs.length)]

    let embed = new MessageEmbed()
    embed.setColor('PURPLE')
    embed.setImage(pick)

    if (message.author === user)
      return message.channel.send(`You can't kiss yourself!`)
    if (args[0]) {
      embed.setTitle(`${name} is kissing ${user.username}. ${mesaj}`)
    }

    message.channel.send(embed)
  },
}
