const responses = [
  'Pong!',
  "I-It's not like I wanted to say pong or anything...",
  'Pong...',
  'Testing, testing, 1, 2, 3!',
  'Anyone there?',
  'Does anyone even use this?',
  'Woo! A secret command!',
  'Ping!... I mean **pong!**',
  'Hi there!',
  'At your service!',
  'Yes?',
  'Hello!',
  'Konnichiwa~',
  'Ohayoo~',
  "I'm up and running!",
  'Here I am!',
  'Right here!',
  'Hai!',
  'Hey there!',
  'You found me!',
  'Nya!',
  'N-Nya..?',
  'Nyahaha you found me!',
]

module.exports = {
  name: 'ping', // Optional
  category: 'Misc',
  description: 'Calcula o ping',
  minArgs: 0,
  maxArgs: 0,
  // callback: ({ message, args, text, client, prefix, instance }) => {}
  callback: async ({ message }) => {
    const pingMsg = await message.channel.send({
      embed: { title: '🔄 | Calculando Ping...' },
    })
    let pingM = pingMsg.createdTimestamp - message.createdTimestamp
    let choice = responses[Math.floor(Math.random() * responses.length - 1)]
    return pingMsg.edit({
      embed: {
        title: `🐱 | ${choice}`,
        description: `Ping: \`(${pingM}ms)\``,
      },
    })
  },
}
