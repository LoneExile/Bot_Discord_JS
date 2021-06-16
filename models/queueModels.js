const mongoose = require('mongoose')

const queueSchema = new mongoose.Schema(
  {
    // qNumber: {
    //   type: String,
    //   require: [true, 'Post must have qNum'],
    // },
    // song: {
    //   type: String,
    //   require: [true, 'Post must have song'],
    // },
    title: {
      type: String,
      require: [true, 'Post must have title'],
    },
    url: {
      type: String,
      required: [true, 'Post must have url'],
    },
    // user: {
    //   type: String,
    //   require: [true, 'Post must have user'],
    // },
    textChannel: {
      type: String,
      require: [true, 'Post must have user'],
    },
    voiceChannel: {
      type: String,
      require: [true, 'Post must have user'],
    },
    connection: {
      type: Boolean,
      require: [true, 'Post must have user'],
    },
    playing: {
      type: Boolean,
      require: [true, 'Post must have user'],
    },
  }
  //{ collection: 'completed' }
)

const Queue = mongoose.model('Queue', queueSchema)
module.exports = Queue
