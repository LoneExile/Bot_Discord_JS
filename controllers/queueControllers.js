const Queue = require('../models/queueModels')

exports.getAllQueue = async (req, res, next) => {
  try {
    const queue = await Queue.find()
    res.status(200).json({
      status: 'you good',
      results: queue.length,
      data: {
        queue,
      },
    })
  } catch (e) {
    console.log(e)
    res.status(400).json({
      status: 'err getAllQueue',
    })
  }
}

exports.createQueue = async (req, res) => {
  try {
    const queue = await Queue.create(req.body)
    res.status(200).json({
      status: `you can createQueue = ${req.body}`,
      data: {
        queue,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err createQueue',
    })
  }
}

// http://localhost:3000/api/v1/queues/:id
exports.getOneQueue = async (req, res) => {
  try {
    const queue = await Queue.findById(req.params.id)
    res.status(200).json({
      status: 'you got your queue',
      data: {
        queue,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err getOneQueue',
    })
  }
}

exports.deleteOneQueue = async (req, res) => {
  try {
    const queue = await Queue.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: 'you deleted one queue',
      data: queue,
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err deleteOneQueue',
    })
  }
}

// https://mongoosejs.com/docs/api/model.html
exports.updateQueue = async (req, res) => {
  try {
    const queue = await Queue.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({
      status: 'you now updateOneQueue',
      data: queue,
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err updateOneQueue',
    })
  }
}
