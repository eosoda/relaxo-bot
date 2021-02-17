// File name: "member.js"
// Folder: "./features"

module.exports = (client) => {
  client.on('guildMemberAdd', (member) => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.get('245638302839865345')
    // Do nothing if the channel wasn't found on this server
    if (!channel) return
    // Send the message, mentioning the member
    channel.send(`${member} has joined. Your soul is now mine`)
  })

  /**
   * Event listner that will send a message in general when a user leaves.
   */
  client.on('guildMemberRemove', (member) => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.get('245638302839865345')
    // Do nothing if the channel wasn't found on this server
    if (!channel) return
    // Send the message, mentioning the member
    channel.send(`${member} has left. I guess you can have your soul back`)
  })
}

module.exports.config = {
  displayName: 'Member Join and Leave', // Can be changed any time
}
