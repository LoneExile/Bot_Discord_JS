const Status = require('../models/statusModel')

exports.getAllStatus = async (req, res, next) => {
  // const [status, error] = await Status.find()
  try {
    const status = await Status.find()
    res.status(200).json({
      status: 'you good',
      results: status.length,
      data: {
        status,
      },
    })
  } catch (e) {
    console.log(e)
    res.status(400).json({
      status: 'err getAllStatus',
    })
  }
}

exports.createStatus = async (req, res) => {
  try {
    const status = await Status.create(req.body)
    res.status(200).json({
      status: `you can createStatus = ${req.body}`,
      data: {
        status,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err createStatus',
    })
  }
}

// http://localhost:3000/api/v1/statuss/:id
exports.getOneStatus = async (req, res) => {
  try {
    const status = await Status.findById(req.params.id)
    res.status(200).json({
      status: 'you got your status',
      data: {
        status,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err getOneStatus',
    })
  }
}

exports.deleteOneStatus = async (req, res) => {
  try {
    const status = await Status.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: 'you deleted one status',
      data: status,
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err deleteOneStatus',
    })
  }
}

// https://mongoosejs.com/docs/api/model.html
exports.updateStatus = async (req, res) => {
  try {
    const status = await Status.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({
      status: 'you now updateOneStatus',
      data: status,
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err updateOneStatus',
    })
  }
}
