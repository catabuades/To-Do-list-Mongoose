const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')

const app = express()
const routesApp = require('./routes')
const PORT = 3001

const URL_DB = 'mongodb://localhost:27017/to-do'

app.set('view engine', 'pug')
app.locals.pretty = true

app.use(express.static(path.join(__dirname, 'public')))

mongoose.promise = global.Promise
mongoose.connect(URL_DB, {useMongoClient: true})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieSession({
  name: 'ThisIsTheProjectCookie',
  keys: ['jksjlfskjfeoiwjl']
}))

app.use((req, res, next) => {
  req.session.logged = req.session.logged || {}
  req.session.completed = req.session.completed || []
  req.session.tasks = req.session.tasks || []
  next()
})

app.use(routesApp)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
