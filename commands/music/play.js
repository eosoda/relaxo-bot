module.exports = {
  name: 'play', // Optional
  category: 'Music',
  description: 'Toca uma música ai',
  aliases: 'p',
  // minArgs: 1,
  // expectedArgs: '<link> ou <nome da musica>',
  callback: async ({ client, message, args }) => {
    if (!message.member.voice.channel)
      return message.channel.send(
        `${client.emotes.error} | Você precisa estar em um canal de voz!`
      )
    const string = args.join(' ')
    if (!string)
      return message.channel.send(
        `${client.emotes.error} | Insira um link ou uma música para eu buscar.`
      )
    try {
      client.distube.play(message, string)
    } catch (e) {
      message.channel.send(`${client.emotes.error} | Error: \`${e}\``)
    }
  },
}
