const messageSchema = require('../../models/message')
const { addToCache } = require('../../features/rr')

module.exports = {
  category: 'Staff',
  description: 'Envia mensagem para reação por Cargo',
  minArgs: 1,
  expectedArgs: '[Channel tag] <message text>',
  requiredPermissions: ['ADMINISTRATOR'],
  callback: async ({ message, args }) => {
    const { guild, mentions } = message
    const { channels } = mentions
    const { targetChannel } = channels.first() || message.channels

    if (channels.first()) {
      args.shift()
    }

    const text = args.join(' ')

    const newMessage = await targetChannel.send(text)

    if (guild.me.hasPermission('MANAGE_MESSAGES')) {
      message.delete()
    }

    if (!guild.me.hasPermission('MANAGE_ROLES')) {
      message.reply(
        'Preciso de permissão para gerenciar cargos, para poder dar e remover cargos!'
      )
      return
    }

    addToCache(guild.id, newMessage)

    new messageSchema({
      guildId: guild.id,
      channelId: targetChannel.id,
      messageId: newMessage.id,
    })
      .save()
      .catch(() => {
        message
          .reply(
            'Falha ao salvar no banco de dados, por favor reporte esse erro!'
          )
          .then((message) => {
            message.delete({
              timeout: 1000 * 10,
            })
          })
      })
  },
}
