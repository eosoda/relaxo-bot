const HMfull = require('hmfull')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'wallpaper', // Optional
  category: 'Info',
  description: 'Give a anime wallpaper to you use on your mobile phone',
  aliases: ['wallmobile', 'wall'],
  callback: async ({ message }) => {
    const wallpaper = await HMfull.HMtai.sfw.mobileWallpaper()

    const baguetteEmbed = new MessageEmbed()
      .setColor('#03A6ED')
      .setTitle(`Mobile wallpaper! 📱`)
      .setDescription(`[Download](${wallpaper.url})`)
      .setImage(wallpaper.url)
      .setFooter(
        message.author.tag,
        message.author.displayAvatarURL({ size: 4096, dynamic: true })
      )
      .setTimestamp()

    return message.channel.send(baguetteEmbed)
  },
}
