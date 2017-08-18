const Task = require('../../models/Task')

function completedTask (req, res) {
  const _id = req.params.id

  Task.findByIdAndUpdate(_id, {done: true})
    .then(() => res.send('to-do completed'))
}

module.exports = completedTask
