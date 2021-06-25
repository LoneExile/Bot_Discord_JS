const Count = require('../models/countModels')

exports.getAllCount = async (req, res, next) => {
  try {
    const count = await Count.find()
    res.status(200).json({
      status: 'you good',
      results: count.length,
      data: {
        count,
      },
    })
  } catch (e) {
    console.log(e)
    res.status(400).json({
      status: 'err getAllCount',
    })
  }
}

exports.createCount = async (req, res, next) => {
  try {
    const count = await Count.create(req.body)
    res.status(200).json({
      status: `you can createCount = ${req.body}`,
      data: {
        count,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err createCount',
    })
  }
}

// http://localhost:3000/api/v1/counts/:id
exports.getOneCount = async (req, res, next) => {
  try {
    const count = await Count.findById(req.params.id)
    res.status(200).json({
      status: 'you got your count',
      data: {
        count,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err getOneCount',
    })
  }
}

exports.deleteOneCount = async (req, res, next) => {
  try {
    const count = await Count.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: 'you deleted one count',
      data: count,
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err deleteOneCount',
    })
  }
}

// https://mongoosejs.com/docs/api/model.html
exports.updateCount = async (req, res, next) => {
  try {
    const count = await Count.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({
      status: 'you now updateOneCount',
      data: count,
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'err updateOneCount',
    })
  }
}
