const express = require("express")
const multer = require("multer")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const port = 5300

app.use(cors())
app.use(multer().single("none"))
app.use(bodyParser.json())

// router
// const { jualProduct } = require("./routes")

const { jualProduct, riwayatBeli } = require("./src/routes")

// app.use("/riwayatbeli/v1", riwayatBeli)
app.use("/profile", jualProduct)
app.use("/profile", riwayatBeli)

app.listen(port, console.log(`Server running on http://localhost:${port}`))
