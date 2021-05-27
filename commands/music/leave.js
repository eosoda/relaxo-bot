module.exports = {
  name: 'leave', // Optional
  category: 'Music',
  description: 'Disconecta do canal de voz',
  callback: async ({ message }) => {
    let channel = message.member.voice.channel
    if (!channel)
      return message.channel.send(
        'Desculpe mas você precisa estar em um canal de voz!',
        message.channel
      )
    if (!message.guild.me.voice.channel)
      return message.channel.send(
        'I Am Not In Any Voice Channel!',
        message.channel
      )

    try {
      await message.guild.me.voice.channel.leave()
    } catch (error) {
      await message.guild.me.voice.kick(message.guild.me.id)
      return sendError('Trying To Leave The Voice Channel...', message.channel)
    }

    const Embed = new MessageEmbed()
      .setAuthor(
        'Leave Voice Channel',
        'https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif'
      )
      .setColor('GREEN')
      .setTitle('Success')
      .setDescription('🎶 Left The Voice Channel.')
      .setTimestamp()

    return message.channel
      .send(Embed)
      .catch(() => message.channel.send('🎶 Left The Voice Channel :C'))
  },
}
