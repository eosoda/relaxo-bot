module.exports = {
  name: 'ping', // Optional
  category: 'Misc',
  description: 'Calcula o ping',
  minArgs: 0,
  maxArgs: 0,
  // callback: ({ message, args, text, client, prefix, instance }) => {}
  callback: async ({ message, client }) => {
    message.channel.send(':ping_pong: Calculating ping...').then((msg) => {
      const ping = msg.createdTimestamp - message.createdTimestamp
      msg.edit(':ping_pong: Pong!')
      setTimeout(function () {
        msg.edit(`Ping Bot: ${ping}, Ping API: ${client.ws.ping}`)
      }, 1000)
    })
  },
}
