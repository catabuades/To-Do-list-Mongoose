const express = require('express')
const router = express.Router()

// handlers for tasks
const showTasksPage = require('./tasks/showTasksPage')

// handlers for task
const createNewTask = require('./task/createNewTask')
const deleteTask = require('./task/deleteTask')
const editTask = require('./task/editTask')
const completedTask = require('./task/completedTask')

// router for tasks
router.get('/to-do', showTasksPage)
router.get('/', function (req, res) {
  res.redirect('/to-do')
})

// router for task
router.post('/tasks', createNewTask)
router.delete('/task/:id', deleteTask)
router.put('/task/:id', editTask)
router.put('/completed/:id', completedTask)

module.exports = router
