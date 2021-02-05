module.exports = {
  name: 'pause', // Optional
  category: 'Music',
  description: 'Toca uma música ai',
  minArgs: 0,
  // expectedArgs: '<url>',
  callback: async ({ client, message, args }) => {
    const queue = client.distube.getQueue(message)
    if (!queue)
      return message.channel.send(
        `${client.emotes.error} | Nenhuma música na fila!!`
      )
    if (queue.pause) {
      client.distube.resume(message)
      return message.channel.send('Tocando novamente pra você :)')
    }
    client.distube.pause(message)
    message.channel.send('Pausei a música pra você :)')
  },
}
