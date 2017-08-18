const Task = require('../../models/Task')

function createNewTask (req, res) {
  const { title } = req.body
  const task = new Task({ title })

  task.save()
    .then((tasks) => res.redirect('/to-do'))
}

module.exports = createNewTask
