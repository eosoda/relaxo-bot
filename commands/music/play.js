module.exports = {
  name: 'play', // Optional
  category: 'Music',
  description: 'Toca uma música ai',
  aliases: 'p',
  // minArgs: 1,
  // expectedArgs: '<url>',
  callback: async ({ client, message, args }) => {
    if (!message.member.voice.channel)
      return message.channel.send(
        `${client.emotes.error} | Você precisa estar em um canal de voz!`
      )
    const music = args.join(' ')
    client.distube.play(message, music)
  },
}
