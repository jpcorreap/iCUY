const express = require('express')
const router = express.Router()

const post = require('../controllers/habits').create
const get = require('../controllers/habits').getAll
const getF = require('../controllers/habits').getFilter

/** Save (CREATE and UPDATE habit) */
router.post('/', post)

/** Get list of all habits in the system */
router.get('/', get)

/** Get list of all habits that meet the requirements */
router.get('/filter', getF)

module.exports = router
