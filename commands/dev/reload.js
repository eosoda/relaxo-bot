module.exports = {
  name: 'reload', // Optional
  category: 'Dev',
  description: 'Recarrega comando',
  // minArgs: 2,
  // maxArgs: 2,
  ownerOnly: true,
  // callback: ({ message, args, text, client, prefix, instance }) => {}
  callback: async ({ client, message, args }) => {
    if (message.author.id !== '136460373564981248')
      return message.channel.send('errorr')

    let category = args[0]
    let command = args[1]

    try {
      delete require.cache[
        require.resolve(`../../commands/${category}/${command}.js`)
      ]
      client.commands.delete(command)
      const pull = require(`../../commands/${category}/${command}.js`)
      client.commands.set(command, pull)

      return message.channel.send(`Done reloading **${command}**`)
    } catch (error) {
      console.log(error)
      //   return message.channel.send(
      //     `Error reloading **${command}**: \`${error.message}\``
      //   )
    }
  },
}
