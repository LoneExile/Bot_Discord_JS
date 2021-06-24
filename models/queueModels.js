const mongoose = require('mongoose')

const queueSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, 'Post must have title'],
  },
  url: {
    type: String,
    required: [true, 'Post must have url'],
  },
  // textChannel: {
  //   type: String,
  //   require: [true, 'Post must have textChannel'],
  // },
  // voiceChannel: {
  //   type: String,
  //   require: [true, 'Post must have voiceChannel'],
  // },
  // connection: {
  //   type: Boolean,
  //   require: [true, 'Post must have connection'],
  // },
  // playing: {
  //   type: Boolean,
  //   require: [true, 'Post must have playing'],
  // },
})

const Queue = mongoose.model('Queue', queueSchema)
module.exports = Queue
