module.exports = {
  name: 'stop', // Optional
  category: 'Music',
  description: 'Para a música ai',
  aliases: 's',
  minArgs: 0,
  // expectedArgs: '<url>',
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
    client.distube.stop(message)
    message.channel.send(`${client.emotes.success} | Parei!`)
  },
}
