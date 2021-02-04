const distube = require('distube')
module.exports = {
  name: 'play', // Optional
  guildOnly: true,
  category: 'Music',
  description: 'Toca uma música ai',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '<url>',
  requiredRoles: ['DJ'],
  callback: ({ client, message, args }) => {
    client.distube.play(message, args)
  },
}
