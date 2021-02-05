module.exports = {
  name: 'queue', // Optional
  category: 'Music',
  description: 'Fila',
  aliases: 'q',
  // minArgs: 1,
  // expectedArgs: '<url>',
  callback: async ({ client, message, args }) => {
    if (!message.member.voice.channel)
      return message.channel.send(
        `${client.emotes.error} | Você precisa estar em um canal de voz!`
      )
    const queue = client.distube.getQueue(message)
    if (!queue)
      return message.channel.send(
        `${client.emotes.error} | Nenhuma música na fila!`
      )
    const q = queue.songs
      .map(
        (song, i) =>
          `${i === 0 ? 'Tocando:' : `${i}.`} ${song.name} - \`${
            song.formattedDuration
          }\``
      )
      .join('\n')
    message.channel.send(`${client.emotes.queue} | **Fila**\n${q}`)
  },
}
