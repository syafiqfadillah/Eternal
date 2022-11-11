const express = require("express")
const { body } = require("express-validator")
const router = express.Router()

const { postJual } = require("../controllers/jual_product")

router.post("/post", postJual)

module.exports = router
