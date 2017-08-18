const Task = require('../../models/Task')

function editTask (req, res) {
  const { title } = req.body
  const _id = req.params.id

  Task.findByIdAndUpdate(_id, {title})
    .then((edited) => res.send('to-do edited'))
}

module.exports = editTask
