module.exports = {
  name: 'volume', // Optional
  category: 'Music',
  description: 'Aumenta ou diminui o volume',
  aliases: 'vol',
  minArgs: 1,
  expectedArgs: '<qtd>',
  callback: async ({ client, message, args }) => {
    const queue = client.distube.getQueue(message)
    if (!queue)
      return message.channel.send(
        `${client.emotes.error} | Nenhuma música na fila!`
      )
    const volume = parseInt(args[0])
    if (isNaN(volume))
      return message.channel.send(
        `${client.emotes.error} | Insira um númreo valido!`
      )
    client.distube.setVolume(message, volume)
    message.channel.send(
      `${client.emotes.success} | Volume ajustado para \`${volume}\``
    )
  },
}
