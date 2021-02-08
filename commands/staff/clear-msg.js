module.exports = {
  name: 'clear', // Optional
  aliases: ['cc', 'limpa'],
  guildOnly: true,
  category: 'Staff',
  description: 'Limpa mensagens',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '<qtd>',
  requiredPermissions: ['ADMINISTRATOR'],
  callback: ({ message, args }) => {
    if (message.deletable) {
      message.delete()
    }

    // Member doesn't have permissions
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message
        .reply('Você não pode excluir mensagens...')
        .then((m) => m.delete(5000))
    }

    // Check if args[0] is a number
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
      return message.channel
        .send(
          'Sim... Isso não é um número! A propósito, também não consigo excluir 0 mensagens.'
        )
        .then((m) => m.delete(5000))
    }
    // Maybe the bot can't delete messages
    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
      return message.channel
        .send('Desculpe... Não consigo excluir mensagens.')
        .then((m) => m.delete(5000))
    }

    let deleteAmount

    if (parseInt(args[0]) > 100) {
      deleteAmount = 100
    } else {
      deleteAmount = parseInt(args[0])
    }

    message.channel
      .bulkDelete(deleteAmount, true)
      .then(async (deleted) => {
        let response = await message.channel.send({
          embed: { title: `Eu deletei \`${deleted.size}\` mensagens.` },
        })
        response.delete({ timeout: 2000 })
      })
      .catch((err) => message.reply(`Algo deu errado... ${err}`))
  },
}
