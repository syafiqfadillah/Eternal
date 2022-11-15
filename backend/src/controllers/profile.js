const model = require("../models/model")

module.exports.profile = (req, res) => {
  const sql = `SELECT * FROM profile`
  model(sql, res, "get berhasil!")
}
