const axios = require('axios')

module.exports = {
  name: 'cat', // Optional
  category: 'Fun',
  description: 'Mostra foto aleatória de um gatinho',
  callback: async ({ message }) => {
    axios
      .get('https://aws.random.cat/meow')
      // .get('https://api.thecatapi.com/v1/images/search')
      .then((res) => {
        // cat = res.data[0].url
        cat = res.data.file
        // message.reply(res.data[0].url)
        message.channel.send(cat)
      })
      .catch((err) => {
        console.error('ERR:', err)
      })
  },
}
