// File name: "express.js"
// Folder: "./features"

module.exports = async () => {
  //path
  const path = require('path')

  //express

  const express = require('express')

  const app = express()

  const port = process.env.PORT || 3001

  app.set('views', path.join(__dirname, '..', 'views'))
  app.set('view engine', 'ejs')

  app.get('/', (req, res) => {
    res
      .status(200)
      .sendFile(path.join(__dirname, '..', 'pages', 'mainPage.html'))
  })

  app.get('/cdn/css/main.css', function (req, res) {
    res
      .status(200)
      .sendFile(
        path.join(
          __dirname,
          '..',
          'pages' + '/' + 'cdn' + '/' + 'css' + '/' + 'main.css'
        )
      )
  })

  app.get('/cdn/css/bulma.css', function (req, res) {
    res
      .status(200)
      .sendFile(
        path.join(
          __dirname,
          '..',
          'pages' + '/' + 'cdn' + '/' + 'css' + '/' + 'bulma.css'
        )
      )
  })

  app.get('/cdn/css/font-awesome.min.css', function (req, res) {
    res
      .status(200)
      .sendFile(
        path.join(
          __dirname,
          '..',
          'pages' + '/' + 'cdn' + '/' + 'css' + '/' + 'font-awesome.min.css'
        )
      )
  })

  app.get('/cdn/images/background_dark.jpg', function (req, res) {
    res
      .status(200)
      .sendFile(
        path.join(
          __dirname,
          '..',
          'pages' + '/' + 'cdn' + '/' + 'images' + '/' + 'background_dark.jpg'
        )
      )
  })

  app.get('/cdn/images/logo.png', function (req, res) {
    res
      .status(200)
      .sendFile(
        path.join(
          __dirname,
          '..',
          'pages' + '/' + 'cdn' + '/' + 'images' + '/' + 'logo.png'
        )
      )
  })

  app.get('/cdn/images/discord-logo.svg', function (req, res) {
    res
      .status(200)
      .sendFile(
        path.join(
          __dirname,
          '..',
          'pages' + '/' + 'cdn' + '/' + 'images' + '/' + 'discord-logo.svg'
        )
      )
  })

  app.get('/info', (req, res) => {
    res.status(200).send(botDetails)
  })

  // const commands = await getCommands(bot)
  // app.get('/commands', (req, res) => {
  //   res.status(200).render('commands', { commands })
  // })
  app.listen(port)
}

module.exports.config = {
  displayName: 'Message', // Can be changed any time
}
