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

  const sql = `INSERT INTO product(nm_toko, nm_product, deskripsi, quantity, harga_product) VALUES 
    (
        "${req.body.nm_toko}",
        "${req.body.nm_product}",
        "${req.body.deskripsi}",
        "${req.body.quantity}",
        "${req.body.harga_product}"
    )`

  model(sql, res, "Dipost!")
}
