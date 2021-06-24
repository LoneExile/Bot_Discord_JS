const mongoose = require('mongoose')

const statusSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, 'Status must have title'],
  },
  status: {
    type: String,
    required: [true, 'Status must have status'],
  },
})

statusSchema.virtual('name').get(function () {
  return this.title + ', ' + this.status
})

const Status = mongoose.model('Status', statusSchema)
module.exports = Status
