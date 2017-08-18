const mongoose = require('mongoose')
const strftime = require('strftime')

const collection = 'tasks'

var TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: String,
    default: strftime('%Y-%m-%d %H:%M:%S', new Date())
  }
}, { collection })

module.exports = mongoose.model('Task', TaskSchema)
