"use strict"
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

// Dev env
const dotenv = require('dotenv')
dotenv.config()

const usersRouter = require('./routes/users')

const app = express()

// view engine none: React

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "front/build")));

app.use('/users', usersRouter)

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/front/build/index.html"));
});


//  Not favicon because Backend
app.get('/favicon.ico', (req, res) => res.status(204));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // No render the error page
  res.status(500).json({
    message: err.message,
    error: err
  })
})


module.exports = app
