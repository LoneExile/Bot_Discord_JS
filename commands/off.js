const Post = require('../models/postModels')

module.exports = {
  name: 'off',
  execute(msg, bot_status) {
    //console.log('shift off!!')
    if (bot_status === 'off') {
      return msg.channel.send('bot is offline')
    }
    Post.updateOne(
      { title: 'bot_status', body: 'off' },
      function (err, awesome_instance) {
        if (err) return handleError(err)
        console.log('shift off!!')
      }
    )
  },
}
