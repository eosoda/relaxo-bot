const { MessageEmbed: Embed } = require('discord.js')

module.exports = {
  name: 'ajuda', // Optional
  category: 'Misc',
  description: 'ajuda',
  callback: async ({ message, args, text, client, prefix, instance }) => {
    const embed = new Embed().setTitle(`Help Menu | ${client.user.username}`)

    const commandInstance = instance.commandHandler.commands

    const removeDup = (arr) => {
      return [...new Set(arr)]
    }
    // Removing the duplicated with the function.

    if (args[0]) {
      return
    } else {
      let categories = removeDup(commandInstance.map((cmd) => cmd.category))
      // Storing all the categories in categories
      for (const category of categories) {
        // Looping through every category, and filiering each command for it.
        // Replace console.log with your embed
        embed.addField(
          `**${category}**`,
          commandInstance
            .filter((cmd) => cmd.category === category)
            .map((cmd) => `${cmd.names[0]}`)
            .join(' | ')
        )
      }
      message.channel.send(embed)
    }
  },
}
