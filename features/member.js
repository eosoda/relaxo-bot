// File name: "member.js"
// Folder: "./features"

const { MessageEmbed } = require('discord.js')

// channelM.setName(`Membros: ${memberCount.toLocaleString()}`)

module.exports = (client) => {
  const guildM = client.guilds.cache.get('245638302839865345')
  const memberCount = guildM.memberCount
  const channelM = guildM.channels.cache.get('804741316960321616')

  client.on('guildMemberAdd', (member) => {
    let welcomeGif = [
      'https://i.pinimg.com/originals/04/dd/db/04dddb24a548c4ce1069513d5cdd4d7a.gif',
      'https://68.media.tumblr.com/8b8a99492ffba7ec6b1e429d2891ee22/tumblr_ohgvn0QWcE1qkz08qo1_540.gif',
      'https://i.pinimg.com/originals/50/eb/47/50eb47c78063d41c26ab6a8556fc3976.gif',
      'https://data.whicdn.com/images/243960123/original.gif',
      'https://data.whicdn.com/images/270710058/original.gif',
    ]

    let gif = welcomeGif[Math.floor(Math.random() * welcomeGif.length)]

    let channel = member.guild.channels.cache.get('803625952613498921')
    let memberavatar = member.user.avatarURL
    if (!channel) return
    let embed = new MessageEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField(':bust_in_silhouette: | Nome : ', `${member}`)
      .addField(
        ':microphone2: | Bem-vindo!',
        `Bem-vindo ao servidor, ${member}`
      )
      .addField(
        ':family_mwgb: | Você é o mais novo membro',
        `${member.guild.memberCount}`
      )
      .setImage(gif)
      .setFooter(`**${member.guild.name}**`)
      .setTimestamp()

    channel.send(embed)

    // auto role
    var role = member.guild.roles.cache.find((role) => role.name == 'Membro')
    member.roles.add(role)
    // auto role end
    channelM.setName(`Membros: ${memberCount.toLocaleString()}`)
    console.log('Updating Member Count')
  })

  /**
   * Event listner that will send a message in general when a user leaves.
   */
  client.on('guildMemberRemove', (member) => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.get('803625952613498921')
    // Do nothing if the channel wasn't found on this server
    if (!channel) return
    // Send the message, mentioning the member
    channel.send(`${member} saiu.`)
    channelM.setName(`Membros: ${memberCount.toLocaleString()}`)
    console.log('Updating Member Count')
  })
}

module.exports.config = {
  displayName: 'Member Join and Leave', // Can be changed any time
}
