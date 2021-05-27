// File name: "music.js"
// Folder: "./features"
const { MessageEmbed } = require('discord.js')
//
module.exports = (client, message) => {
  const status = (queue) =>
    `Volume: \`${queue.volume}%\` | Filter: \`${
      queue.filter || 'Off'
    }\` | Loop: \`${
      queue.repeatMode
        ? queue.repeatMode === 2
          ? 'All Queue'
          : 'This Song'
        : 'Off'
    }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``
  client.distube
    .on('playSong', (message, queue, song) => {
      const embed = new MessageEmbed()
        .setTitle(`${song.name} - ${song.formattedDuration}`)
        .setURL(`${song.url}`)
        .setColor('RANDOM')
        .setDescription(`${status(queue)}`)
        .setThumbnail(`${song.thumbnail}`)
        .setTimestamp()
        .setFooter(
          'Request by: ' + message.author.username,
          message.author.avatarURL()
        )
      message.channel.send(embed)
    })
    .on('addSong', (message, queue, song) => {
      const embed = new MessageEmbed()
        .setTitle(`Added ${song.name} - \`${song.formattedDuration}\``)
        .setURL(`${song.url}`)
        .setColor('RANDOM')
        .setThumbnail(`${song.thumbnail}`)
        .setTimestamp()
        .setFooter(`Request by: ${song.user}`, message.author.avatarURL())
      message.channel.send(embed)
    })
    .on('playList', (message, queue, playlist, song) =>
      message.channel.send(
        `Play \`${playlist.name}\` playlist (${
          playlist.songs.length
        } songs).\nRequested by: ${song.user}\nNow playing \`${
          song.name
        }\` - \`${song.formattedDuration}\`\n${status(queue)}`
      )
    )
    .on('addList', (message, queue, playlist) =>
      message.channel.send(
        `Added \`${playlist.name}\` playlist (${
          playlist.songs.length
        } songs) to queue\n${status(queue)}`
      )
    )
    // DisTubeOptions.searchSongs = true
    .on('searchResult', (message, result) => {
      let i = 0
      message.channel.send(
        `**Choose an option from below**\n${result
          .map(
            (song) => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``
          )
          .join('\n')}\n*Enter anything else or wait 60 seconds to cancel*`
      )
    })
    // DisTubeOptions.searchSongs = true
    .on('searchCancel', (message) => message.channel.send(`Searching canceled`))
    .on('error', (message, e) => {
      console.error(e)
      message.channel.send('An error encountered: ' + e)
    })
}

module.exports.config = {
  displayName: 'Music', // Can be changed any time
}
