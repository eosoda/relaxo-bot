module.exports = {
  name: 'add', // Optional
  aliases: 'soma',
  category: 'Misc',
  description: 'Soma dois números',
  callback: ({ message, args }) => {
    let sum = 0

    for (const arg of args) {
      sum += parseInt(arg)
    }

    message.reply(`O resultado da soma é ${sum}`)
  },
}
