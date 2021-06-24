const Status = require('../models/statusModel')

module.exports = {
  name: 'on',
  execute(msg, bot_status) {
    //console.log('shift on!!')
    if (bot_status === 'on') {
      return msg.channel.send('bot is online')
    }

    try {
      Status.updateOne(
        { title: 'bot_status', status: 'on' },
        function (err, awesome_instance) {
          if (err) return handleError(err)
          console.log('shift on!!')
        }
      )
    } catch (error) {
      console.log(error)
    }
  },
}
