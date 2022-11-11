const model = require("../models/model")

module.exports.riwayatBeli = (req, res) => {
  const sql = `SELECT * FROM riwayat_beli`

  model(sql, res, "Diambil!")
}
