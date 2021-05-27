module.exports = {
  name: 'purge', // Optional
  guildOnly: true,
  category: 'Staff',
  description: 'A simple purge Command that ignores any pinned messages',
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '<qtd>',
  requiredPermissions: ['ADMINISTRATOR'],
  callback: async ({ message, args }) => {
    const num = parseInt(args[0])
    let rounded = Math.floor(num / 100) * 100
    const diff = num - rounded

    if (num > 99 || num < 2)
      return message.reply(
        `Please use a value that's between **2** and **99**.`
      )
    message.delete()

    let deletedMsgs = []
    let notPinneda = []
    const notify = await message.channel.send(`Deleting messages...`)
    const fetcheda = await message.channel.messages.fetch({
      limit: diff,
      before: message.id,
    })
    fetcheda.forEach((m) => {
      if (!m.pinned) notPinneda.push(m)
    })
    const deleted = await message.channel.bulkDelete(notPinneda, {
      filterOld: true,
    })
    await deleted.tap((m) => deletedMsgs.push(m))
    while (rounded > 0) {
      let notPinned = []
      const fetched = await message.channel.messages.fetch({
        limit: 100,
        before: message.id,
      })
      fetched.forEach((m) => {
        if (!m.pinned) notPinned.push(m)
      })
      const deleted = await message.channel.bulkDelete(notPinned, {
        filterOld: true,
      })
      await deleted.tap((m) => deletedMsgs.push(m))
      rounded -= 100
    }
    notify
      .edit(`✅ Deleted **${num}** messages`)
      .then((m) => m.delete({ timeout: 10000 }))
  },
}
