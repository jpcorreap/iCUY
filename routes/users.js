const express = require('express')
const router = express.Router()

const saveUser = require('../controllers/users').postAddUser
const getAllUsers = require('../controllers/users').getAllUsers
const getUsersByFilter = require('../controllers/users').getUsersByFilter

/* GET users controller. */
router.post('/', saveUser)
router.get('/', getAllUsers)
router.get('/filter', getUsersByFilter)

module.exports = router
