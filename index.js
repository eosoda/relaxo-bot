require('dotenv').config()

const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const client = new DiscordJS.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
})
const token = process.env.TOKEN
//express
const http = require('http')
const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
// // default URL for website
// app.use('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/public/index.html'))
//   //__dirname : It will resolve to your project folder
// })
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})
app.get('/suporte', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/suporte.html'))
})
const server = http.createServer(app)
const port = process.env.PORT || 3000
server.listen(port)
//end express

client.on('ready', () => {
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
    // Set your MongoDB connection path
    .setMongoPath(process.env.MONGO_URI)
    // Set the default prefix for your bot, it is ! by default
    .setDefaultPrefix('!')
    // Set the embed color for your bot. The default help menu will use this. This hex value can be a string too
    .setColor(0xff0000)
})

client.login(token)
