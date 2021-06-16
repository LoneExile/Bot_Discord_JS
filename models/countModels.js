const mongoose = require('mongoose')

const countSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: [true, 'Post must have count'],
  },
  title: {
    type: String,
    require: [true, 'Post must have title'],
  },
  url: {
    type: String,
    required: [true, 'Post must have url'],
  },
})

const Count = mongoose.model('Count', countSchema)
module.exports = Count
