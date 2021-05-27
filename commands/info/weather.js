const { MessageEmbed } = require('discord.js')
const weather = require('weather-js')

module.exports = {
  name: 'Weather', // Optional
  category: 'Info',
  description: 'Pesquisa sobre previsão do tempo',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '<local>',
  aliases: ['previsao', 'clima'],
  callback: async ({ message, args }) => {
    weather.find(
      { search: args.join(' '), degreeType: 'C' },
      function (err, result) {
        try {
          let embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`Previsão em: ${result[0].location.name}`)
            .setThumbnail(result[0].current.imageUrl)
            .addField(
              'Temperatura: ',
              `${result[0].current.temperature}°C`,
              true
            )
            .addField('Sensação: ', `${result[0].current.feelslike}°C`, true)
            .addField('Humidade: ', `${result[0].current.humidity}%`, true)
            .setDescription(
              `**Sky weather:** ${result[0].current.skytext} \n\n **Wind info:** ${result[0].current.winddisplay}`
            )
          message.channel.send(embed)
        } catch (err) {
          return message.channel.send(
            'Incapaz de obter os dados de determinada localização'
          )
        }
      }
    )
  },
}
