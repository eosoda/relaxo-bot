const { MessageEmbed } = require('discord.js')
const time = require('ms')

module.exports = {
  name: 'ping', // Optional
  category: 'Misc',
  description: 'Calcula o ping',
  minArgs: 0,
  maxArgs: 0,
  // callback: ({ message, args, text, client, prefix, instance }) => {}
  callback: async ({ client, message }) => {
    // For the uptime for the discord bot ! ! !

    const uptime = time(client.uptime)

    // cool things yes.

    let inline = true

    // Sends a Messages

    const pingMessage = await message.channel.send(
      'Here are my Latency and API Latency and my uptime!'
    )

    // Code Below
    // Also Change your setThumbnail and SetFooter

    const Embede = new MessageEmbed()
      .addField(
        'My Latency is:',
        `${pingMessage.createdTimestamp - message.createdTimestamp}ms`,
        inline
      )
      .setColor('#11bed3')
      .addField('My API Latency is:', `${Math.round(client.ws.ping)}ms`, inline)
      .addField('I have been up for:', uptime)

    // Embede.setThumbnail(client.user.displayAvatarURL())
    Embede.setFooter('Ping Command', client.user.displayAvatarURL())
    Embede.setTimestamp()
    message.channel.send(Embede)
  },
}
