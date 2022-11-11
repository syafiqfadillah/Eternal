const express = require("express")
const { body } = require("express-validator")
const router = express.Router()

const { riwayatBeli } = require("../controllers/riwayat_beli")

router.get("/data", riwayatBeli)

module.exports = router
