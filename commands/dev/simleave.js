module.exports = {
  name: 'simleave', // Optional
  category: 'Dev',
  description: 'Simula saida de membro',
  ownerOnly: true,
  requiredPermissions: ['ADMINISTRATOR'],
  // callback: ({ message, args, text, client, prefix, instance }) => {}
  callback: ({ client, message }) => {
    client.emit('guildMemberRemove', message.member)
  },
}
