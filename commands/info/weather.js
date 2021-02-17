const { MessageEmbed } = require('discord.js')
const weather = require('weather-js')

module.exports = {
  name: 'Weather', // Optional
  category: 'Info',
  description: 'Pesquisa sobre previsão do tempo',
  minArgs: 0,
  maxArgs: 1,
  expectedArgs: '<local>',
  aliases: ['previsao', 'clima'],
  callback: async ({ message, args }) => {
    if (!args.length) {
      return message.channel.send('Por favor, forneça a localização do clima')
    }

    weather.find(
      { search: args.join(' '), degreeType: 'C' },
      function (err, result) {
        try {
          let embed = new MessageEmbed()
            .setTitle(`Previsão do Tempo - ${result[0].location.name}`)
            .setColor('#ff2050')
            .setDescription(
              'As unidades de temperatura podem ser diferentes em algum momento'
            )
            .addField(
              'Temperatura',
              `${result[0].current.temperature} Celsius`,
              true
            )
            .addField('Céu', result[0].current.skytext, true)
            .addField('Umidade', result[0].current.humidity, true)
            .addField('Velocidade do vento', result[0].current.windspeed, true) //What about image
            .addField(
              'Tempo de Observação',
              result[0].current.observationtime,
              true
            )
            .addField('Exibição de vento', result[0].current.winddisplay, true)
            .setThumbnail(result[0].current.imageUrl)
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
