const express = require("express");
const router = express.Router();

const post = require("../controllers/users").create;
const get = require("../controllers/users").getAll;
const getF = require("../controllers/users").getFilter;

/** Save (CREATE and UPDATE user) */
router.post("/", post);

/** Get list of all users in the system */
router.get("/", get);

/** Get list of all users that meet the requirements */
router.get("/filter", getF);

module.exports = router;
