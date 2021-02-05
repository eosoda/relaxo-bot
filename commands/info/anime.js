// const malScraper = require('mal-scraper')
const { MessageEmbed } = require('discord.js')
const animeJs = require('@freezegold/anime.js')
const animej = new animeJs.Client()
const fetch = require('node-fetch')

module.exports = {
  name: 'anime', // Optional
  category: 'Info',
  description: 'Pesquisa informações sobre um anime',
  callback: ({ message, client, args }) => {
    if (!args[0]) {
      return message.channel.send('Please Give ous the name of anime')
    }
    //main part
    var search = message.content.split(/\s+/g).slice(1).join(' ')
    animej
      .searchAnime(search)
      .then(async (result) => {
        if (result.length === 0) {
          return message.channel.send(`No results found for **${search}**!`)
        }

        var anime = result[0]

        console.log(anime)

        let embed = new MessageEmbed()
          .setColor('#FF2050')
          .setAuthor(
            `${anime.titles.english ? anime.titles.english : search} | ${
              anime.showType
            }`,
            anime.posterImage.original
          )
          .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
          .addField(
            '❯\u2000Information',
            `•\u2000\**Romaji:** ${
              anime.titles.romaji
            }\n\•\u2000\**Age Rating:** ${
              anime.ageRating
            }\n\•\u2000\**NSFW:** ${anime.nsfw ? 'Yes' : 'No'}`,
            true
          )
          .addField(
            '❯\u2000Stats',
            `•\u2000\**Average Rating:** ${anime.averageRating}\n\•\u2000\**Rating Rank:** ${anime.ratingRank}\n\•\u2000\**Popularity Rank:** ${anime.popularityRank}`,
            true
          )
          .addField(
            '❯\u2000Status',
            `•\u2000\**Episodes:** ${
              anime.episodeCount ? anime.episodeCount : 'N/A'
            }\n\•\u2000\**Start Date:** ${
              anime.startDate
            }\n\•\u2000\**End Date:** ${
              anime.endDate ? anime.endDate : 'Still airing'
            }`,
            true
          )

          .setThumbnail(anime.posterImage.original, 100, 200)

        return message.channel.send({ embed })
      })
      .catch((err) => {
        console.log(err) //cathing error
        return message.channel.send(`No results found for **${search}**!`)
      })
  },
}
