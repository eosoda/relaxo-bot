module.exports = {
  name: 'resume', // Optional
  category: 'Music',
  description: 'Resume música ai',
  aliases: ['rs', 'unpause'],
  minArgs: 0,
  // expectedArgs: '<url>',
  callback: async ({ client, message, args }) => {
    const queue = client.distube.getQueue(message)
    if (!queue)
      return message.channel.send(
        `${client.emotes.error} | There is nothing in the queue right now!`
      )
    client.distube.resume(message)
    message.channel.send('Resumed the song for you :)')
  },
}
