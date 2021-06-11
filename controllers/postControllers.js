const Post = require('../models/postModels')

exports.getAllPost = async (req, res, next) => {
  // const [post, error] = await Post.find()
  try {
    const post = await Post.find()
    res.status(200).json({
      status: 'you good',
      results: post.length,
      data: {
        post,
      },
    })
  } catch (e) {
    console.log(e)
    res.status(400).json({
      status: 'err getAllPost',
    })
  }
}

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body)
    res.status(200).json({
      status: `you can createPost = ${req.body}`,
      data: {
        post,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err createPost',
    })
  }
}

// http://localhost:3000/api/v1/posts/:id
exports.getOnePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json({
      status: 'you got your post',
      data: {
        post,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err getOnePost',
    })
  }
}

exports.deleteOnePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: 'you deleted one post',
      data: post,
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err deleteOnePost',
    })
  }
}

// https://mongoosejs.com/docs/api/model.html
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({
      status: 'you now updateOnePost',
      data: post,
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err updateOnePost',
    })
  }
}
