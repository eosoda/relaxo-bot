const malScraper = require('mal-scraper')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'anime', // Optional
  category: 'Misc',
  description: 'Pesquisa informações sobre um anime',
  // callback: ({ message, args, text, client, prefix, instance }) => {}
  callback: ({ message, client, text }) => {
    const anime = text

    try {
      malScraper
        .getInfoFromName(anime)
        .then((data) => {
          let embed = new MessageEmbed()
            .setTitle(data.title)
            .setColor('RANDOM')
            .setDescription(data.synopsis)
            .setThumbnail(data.picture)
            .addField('Ratings', data.score)
            .addField('TOTAL EPISODES', data.episodes)
          message.channel.send(embed)
        })
        .catch((err) => console.log(err))
    } catch (err) {
      msg.delete()
      return message.channel.send('Não encontrei nenhum anime')
    }
  },
}
