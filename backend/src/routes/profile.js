const express = require("express")
const { body } = require("express-validator")
const router = express.Router()

const { profile } = require("../controllers/profile")

router.get("/profile", profile)

module.exports = router
