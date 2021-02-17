const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'rules', // Optional
  category: 'Info',
  minArgs: 0,
  description: 'Mostra Regras',
  aliases: ['rules', 'regras'],
  callback: async ({ client, message }) => {
    const nfsw = message.guild.channels.cache
      .get('803686221712064543')
      .toString()
    var rules1 = new MessageEmbed()
      .setTitle('Regras')
      .setDescription(
        '__**1.**__ Sem spam ou inundar o chat com mensagens, símbolos ou imagens etc. \n' +
          '__**2.**__ Não digite em CAPS. \n' +
          ` __**3.**__ adulto (18+), imagens explícitas etc, vá para o canal ${nfsw} \n` +
          '__**4.**__ Nenhum conteúdo racista ou degradante.\n' +
          '__**5.**__ Sem xingamentos excessivos. \n' +
          '__**6.**__ Nenhuma publicidade de outros sites/servidores discord sem permissão. \n' +
          '__**7.**__ Não é permitido postar links externos além de links diretos para o youtube.\n' +
          '__**8.**__ Não use nomes de usuário de outras pessoas e/ou se faça passar por elas. \n' +
          '__**9.**__ Sem implorar ou pedir repetidamente por permissões no chat. \n' +
          '__**10.**__ Nenhum nome ofensivo ou nomes que contenham palavrões. \n' +
          '__**11.**__ Não discuta com a equipe, pois as decisões são finais. \n' +
          '__**12.**__ Não envie mensagens repetidas para moderadores ou administradores sem permissão \n' +
          '__**13.**__ Não envie mensagens para pessoas, moderadores ou administradores com perguntas "estúpidas". \n'
      )
      .setColor('0xFF0000')
      .setFooter(client.user.username, client.user.displayAvatarURL())
    message.channel.send(rules1)
  },
}
