const model = require("../models/model")
const { validationResult } = require("express-validator")

module.exports.postJual = (req, res) => {
  const err = validationResult(req)

  if (!err.isEmpty) {
    let Error = new Error("invalid value")
    Error.status(400)
    Error.data = Error.array()
    throw Error
  }

  const sql = `INSERT INTO product(nm_toko, nm_tanaman, deskripsi, quantity, harga) VALUES 
    (
        "${req.body.nm_toko}",
        "${req.body.nm_tanaman}",
        "${req.body.deskripsi}",
        "${req.body.quantity}",
        "${req.body.harga}"
    )`

  model(sql, res, "Dipost!")
}

module.exports.getJual = (req, res) => {
  const sql = `SELECT * FROM profile`
  model(sql, res, "get berhasil!")
}
