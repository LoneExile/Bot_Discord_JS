const Status = require('../models/statusModel')

module.exports = {
  name: 'off',
  execute(msg, bot_status) {
    //console.log('shift off!!')
    if (bot_status === 'off') {
      return msg.channel.send('bot is offline')
    }
    Status.updateOne(
      { title: 'bot_status', status: 'off' },
      function (err, awesome_instance) {
        if (err) return handleError(err)
        console.log('shift off!!')
      }
    )
  },
}
