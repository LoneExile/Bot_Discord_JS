const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, 'Post must have title'],
    },
    body: {
      type: String,
      required: [true, 'Post must have body'],
    },
  }
  //{ collection: 'completed' }
)

postSchema.virtual('name').get(function () {
  return this.title + ', ' + this.body
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post
