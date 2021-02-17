module.exports = {
  name: 'simjoin', // Optional
  category: 'Dev',
  description: 'Simula entrada de membro',
  ownerOnly: true,
  requiredPermissions: ['ADMINISTRATOR'],
  // callback: ({ message, args, text, client, prefix, instance }) => {}
  callback: ({ client, message }) => {
    client.emit('guildMemberAdd', message.member)
  },
}
