import db from "./db_config"

export const model = (sql, res, msg) => {
  db.query(sql, (err, result) => {
    if (err) throw err
    res.status(200).json({
      message: `data berhasil ${msg}`,
      data: result,
    })
  })
}

