const express = require('express')
const router = express.Router()

const post = require('../controllers/records').create
const get = require('../controllers/records').getAll
const getF = require('../controllers/records').getFilter

/** Save (CREATE and UPDATE record) */
router.post('/', post)

/** Get list of all records in the system */
router.get('/', get)

/** Get list of all recorsa that meet the requirements */
router.get('/filter', getF)

module.exports = router
