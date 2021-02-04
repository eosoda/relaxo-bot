module.exports = {
  name: 'ping', // Optional
  category: 'Misc',
  description: 'Calcula o ping',
  minArgs: 0,
  maxArgs: 0,
  // callback: ({ message, args, text, client, prefix, instance }) => {}
  callback: ({ message, client }) => {
    message.reply('Calculating ping...').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp
      resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
    })
  },
}
