module.exports = {
  name: 'skip', // Optional
  category: 'Music',
  description: 'Skipa a musica atual',
  aliases: 'next',
  minArgs: 0,
  callback: async ({ client, message, args }) => {
    if (!message.member.voice.channel)
      return message.channel.send(
        `${client.emotes.error} | Você precisa estar em um canal de voz!`
      )
    const queue = client.distube.getQueue(message)
    if (!queue)
      return message.channel.send(
        `${client.emotes.error} | Não há nada na fila agora!`
      )
    try {
      client.distube.skip(message)
      message.channel.send(
        `${client.emotes.success} | Skipped! Now playing:\n${queue.songs[0].name}`
      )
    } catch (e) {
      message.channel.send(`${client.emotes.error} | ${e}`)
    }
  },
}
