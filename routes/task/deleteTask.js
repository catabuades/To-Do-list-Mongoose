const Task = require('../../models/Task')

function deleteTask (req, res) {
  const _id = req.params.id

  Task.findByIdAndRemove(_id)
    .then(() => res.send('task removed'))
}

module.exports = deleteTask
