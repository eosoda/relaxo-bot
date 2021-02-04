module.exports = {
  name: 'clear', // Optional
  aliases: ['cc', 'limpa'],
  guildOnly: true,
  category: 'Staff',
  description: 'Limpa mensagens',
  minArgs: 1,
  maxArgs: 2,
  expectedArgs: '<qtd>',
  requiredPermissions: ['ADMINISTRATOR'],
  callback: ({ message, args }) => {
    const num = +args
    message.channel.messages.fetch().then((n) => {
      n = num
      message.delete()
      message.channel.bulkDelete(n)
      if (n == 1) {
        message.reply(`${n} mensagem deletada`).then((msg) => {
          msg.delete({ timeout: 1000 })
        })
      } else {
        message.reply(`${n} mensagens deletadas`).then((msg) => {
          msg.delete({ timeout: 1000 })
        })
      }
    })
  },
}
