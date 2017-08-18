const Task = require('../../models/Task')

function showTasksPage (req, res) {
  Task.find()
  	.then(tasks => res.render('pages/tasks/index', {tasks}))
  	.catch(() => res.send('this is an error'))
}

module.exports = showTasksPage
