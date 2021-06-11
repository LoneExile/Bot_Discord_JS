const mongoose = require('mongoose')

/** 
        textChannel: msg.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        //   volume: 5,
        playing: true, 
        */
const queueSchema = new mongoose.Schema(
  {
    qNumber: {
      type: String,
      require: [true, 'Post must have qNum'],
    },
    song: {
      type: String,
      require: [true, 'Post must have song'],
    },
    url: {
      type: String,
      required: [true, 'Post must have url'],
    },
    user: {
      type: String,
      require: [true, 'Post must have user'],
    },
    textChannel: {
      type: String,
      require: [true, 'Post must have user'],
    },
    voiceChannel: {
      type: String,
      require: [true, 'Post must have user'],
    },
  }
  //{ collection: 'completed' }
)

// queueSchema.virtual('name').get(function () {
//   return this.title + ', ' + this.body
// })

const Queue = mongoose.model('Queue', queueSchema)
module.exports = Queue
