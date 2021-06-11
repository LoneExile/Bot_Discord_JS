const Post = require('../models/postModels')

module.exports = {
  name: 'on',
  execute(msg, bot_status) {
    //console.log('shift on!!')
    if (bot_status === 'on') {
      return msg.channel.send('bot is online')
    }

    try {
      Post.updateOne(
        { title: 'bot_status', body: 'on' },
        function (err, awesome_instance) {
          if (err) return handleError(err)
          console.log('shift on!!')
        }
        // const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
        //   new: true,
        //   runValidators: true,
        // })
      )
    } catch (error) {
      console.log(error)
    }
  },
}

// var storySchema = Schema({
//   author : { type: Schema.Types.ObjectId, ref: 'Author' },
//   title    : String
// });
