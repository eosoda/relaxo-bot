require('dotenv').config()
const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const client = new DiscordJS.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
})
const token = process.env.TOKEN

client.on('ready', () => {
  client.user.setPresence('RelaxÔ 💆‍♂️')
  // See the "Language Support" section of this documentation
  // An empty string = ignored
  const messagesPath = 'messages.json'
  // Used to configure the database connection.
  // These are the default options but you can overwrite them
  const dbOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
  // Initialize WOKCommands with specific folders and MongoDB
  new WOKCommands(client, {
    commandsDir: 'commands',
    // featureDir: 'features',
    messagesPath,
    showWarns: false, // Show start up warnings
    dbOptions,
  })
    .setBotOwner('136460373564981248')
    // Set your MongoDB connection path
    .setMongoPath(process.env.MONGO_URI)
    // Set the default prefix for your bot, it is ! by default
    .setDefaultPrefix('!')

    // Set the category emoji by using it's settings:
    .setCategorySettings([
      {
        // You can change the default emojis as well
        name: 'Configuration',
        emoji: '🚧',
        // You can also hide a category from the help menu
        // Admins bypass this
        hidden: true,
      },
      {
        name: 'Staff',
        emoji: '👑',
      },
      {
        name: 'Misc',
        emoji: '⛏️',
      },
      {
        name: 'Economy',
        emoji: '💸',
      },
    ])
    // Set the embed color for your bot. The default help menu will use this. This hex value can be a string too
    .setColor(0xff0000)
})

client.login(token)
