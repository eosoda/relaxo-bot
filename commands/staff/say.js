const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'say', // Optional
  aliases: ['falar', 'say'],
  guildOnly: true,
  category: 'Staff',
  description: 'Get the bot to say what ever you want in a specific channel.',
  minArgs: 1,
  // maxArgs: 1,
  expectedArgs: '<channel id> <msg>',
  requiredPermissions: ['ADMINISTRATOR'],
  callback: ({ message, args, text }) => {
    if (message.author.bot) return
    let rChannel = message.mentions.channels.first(args[0])
    if (!rChannel)
      return message.channel.send(
        `You did not specify your channel to send the announcement too!`
      )
    // console.log(rChannel)
    let announcement = args.slice(1).join(' ')
    let MSG = announcement
    console.log(text)
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`)
    const embed = new MessageEmbed()
      .setTitle(`New announcement!`)
      .setDescription(`${MSG}`)
      .setColor('RANDOM')
    // rChannel.send(_)
    message.channel.send(embed)
    message.delete()
  },
}
