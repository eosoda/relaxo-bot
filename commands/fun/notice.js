module.exports = {
  name: 'notice', // Optional
  category: 'Fun',
  description: 'Be noticed by the bot',
  aliases: ['senpai'],
  callback: ({ message }) => {
    message.channel.send(
      message.author.toString() + ' I Have Noticed You, Feel Proud!'
    )
  },
}
