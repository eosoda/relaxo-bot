const { MessageEmbed } = require('discord.js')
const fs = require('fs')
const kills = require('../../killed.json')

module.exports = {
  name: 'kill', // Optional
  category: 'Fun',
  description: 'Kill someone',
  minArgs: 0,
  maxArgs: 1,
  expectedArgs: '<@user>',
  callback: async ({ message }) => {
    const killGifs = [
      `https://media1.tenor.com/images/0304cf80269c43d51bab9554c04435e9/tenor.gif`,
      `https://64.media.tumblr.com/5dae40d8a40d8b74ab1752e788edac8a/tumblr_p5rj16Pjh41ri5ljho1_400.gifv`,
      `https://media1.tenor.com/images/d42b8c67ceb776052cadb53306dd2b12/tenor.gif`,
      `https://media1.tenor.com/images/c4b237dbcf676cf49a6d6d11cfbe45c8/tenor.gif`,
      `https://i.makeagif.com/media/10-04-2015/_ex9rl.gif`,
    ]
    const target = message.mentions.users.first()

    if (!target)
      return message.channel.send(`${message.author} killed themselves. 💀`)

    const id = target.id
    let gif = killGifs[Math.floor(Math.random() * killGifs.length)]
    let deathCount = kills[id]

    if (!deathCount) {
      kills[id] = 1

      const emb = new MessageEmbed()
        .setColor('#8a0303')
        .addField(
          `${message.author.username} killed ${target.username} 🔪`,
          `${target} has been killed for the first time!`,
          true
        )
        .setImage(gif)
        .setTimestamp()

      message.channel.send(emb)
    } else {
      deathCount = kills[id] = kills[id] + 1

      const emb = new MessageEmbed()
        .setColor('##8a0303')
        .setTitle(`${message.author.username} killed ${target.username} 🔪`)
        .setDescription(`${target} has been killed ${deathCount} times!`)
        .setImage(gif)
        .setTimestamp()

      message.channel.send(emb)
    }

    // Update kills file
    fs.writeFileSync('../../killed.json', JSON.stringify(kills), (err) =>
      console.log(err)
    )
  },
}
