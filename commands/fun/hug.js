const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'hug', // Optional
  category: 'Fun',
  description: 'hug someone',
  minArgs: 0,
  maxArgs: 1,
  expectedArgs: '<@user>',
  callback: async ({ message, args }) => {
    let gifs = [
      'https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif',
      'https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif',
      'https://25.media.tumblr.com/tumblr_ma7l17EWnk1rq65rlo1_500.gif',
      'https://media3.giphy.com/media/wnsgren9NtITS/giphy.gif',
      'https://media1.tenor.com/images/969f0f462e4b7350da543f0231ba94cb/tenor.gif?itemid=14246498',
      'https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif',
      'https://cdn.lowgif.com/medium/6b0a88162a4b836c-.gif',
      'https://media.tenor.com/images/825050620d8052ad0cf274f9f8a11416/tenor.gif',
      'https://steamuserimages-a.akamaihd.net/ugc/784103565766330825/3D42253804E4AC3D92DC416B306CEA572EF860A0/',
    ]
    let pick = gifs[Math.floor(Math.random() * gifs.length)]

    let embed = new MessageEmbed()
    embed.setColor('#FFDBE9')
    embed.setImage(pick)

    if (args[0]) {
      const taggedUser = message.mentions.users.first()
      embed.setDescription(
        `${message.author} **gave** ${taggedUser} **a hug!** `
      )
    } else {
      return message.channel.send('Please specify a member to hug!')
    }
    message.channel.send(embed)
  },
}
