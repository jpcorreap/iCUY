"use strict"

const User = require("../model/user").User
const fetchAll = require("../model/user").fetchAll
const fetchFilter = require("../model/user").fetchFilter

//Register
exports.postAddUser = async (req, res) => {

  const inputUser = req.body.user
  let errMessage

  if (!inputUser.name)
    errMessage = "Name is required"
  if (!inputUser.email && !errMessage)
    errMessage = "Email is required"
  if (!inputUser.password && !errMessage)
    errMessage = "Password is required"
  if (!inputUser.birthdate && !errMessage)
    errMessage = "Birth date is required"
  if (!inputUser.gender && !errMessage)
    errMessage = "Gender is required"

  errMessage = await validateEmail(inputUser.email)
    
  if (!errMessage) {
    const user = new User(inputUser)
    user.save()
      .then(() => {
        res.status(200).json("User created")
      })
      .catch(err => {
        res.status(409).json(err)
        throw (err)
      })
  }
  else {
    res.status(409).json(errMessage)
  }

}

exports.getAllUsers = (req, res) => {
  fetchAll()
    .then(users => {
      console.log("Usuario creado")
      res.status(200).json(users)
    })
    .catch(err => {
      throw (err)
    })
}

exports.getUsersByFilter = (req, res) => {
  const name = req.query.name
  const email = req.query.email

  fetchFilter(email, name)
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      throw (err)
    })
}


const validateEmail = async (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
  let existsEmail = false
  let message = ""
  if (!re.test(email))
    message = "Email not valid"
  await fetchFilter(email)
    .then(users => { existsEmail = users.length > 0 ? true : false })
    .catch(err => { console.log(err) })
  if (existsEmail)
    return "The account already exists"
  return message === "" ? undefined : message

}

