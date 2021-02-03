const { MessageEmbed } = require('discord.js')
const covid19 = require('novelcovid')
module.exports = {
  name: 'covid19', // Optional
  category: 'Info',
  minArgs: 0,
  maxArgs: 1,
  description: 'Pesquisa informações sobre do covid',
  aliases: ['covid', 'c19'],
  expectedArgs: '<nome do país (em inglês)>',
  callback: async ({ message, args }) => {
    if (!args.length) {
      return message.channel.send('Digite o nome de um país (em inglês)')
    }

    if (args == 'global') {
      let corona = await covid19.all() //it will give global cases

      let embed = new MessageEmbed()
        .setTitle('Casos ao redor do Mundo')
        .setColor('#ff2050')
        .addField('Total de Casos', corona.cases.toLocaleString(), true)
        .addField('Total de Mortos', corona.deaths.toLocaleString(), true)
        .addField(
          'Total de Recuperados',
          corona.recovered.toLocaleString(),
          true
        )
        .addField('Casos de Hoje', corona.todayCases.toLocaleString(), true)
        .addField('Mortos Hoje', corona.todayDeaths.toLocaleString(), true)
        .addField('Casos Ativos', corona.active.toLocaleString(), true)

      message.channel.send(embed)
    } else {
      let corona = await covid19.countries({ country: args }) //change it to countries

      let embed = new MessageEmbed()
        .setTitle(`${corona.country}`)
        .setColor('#ff2050')
        .addField('Total de Casos', corona.cases.toLocaleString(), true)
        .addField('Total de Mortos', corona.deaths.toLocaleString(), true)
        .addField(
          'Total de Recuperados',
          corona.recovered.toLocaleString(),
          true
        )
        .addField('Casos de Hoje', corona.todayCases.toLocaleString(), true)
        .addField('Mortos Hoje', corona.todayDeaths.toLocaleString(), true)
        .addField('Casos Ativos', corona.active.toLocaleString(), true)
        .setThumbnail(corona.countryInfo.flag)

      message.channel.send(embed)
    }
  },
}
