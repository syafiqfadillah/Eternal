const db = require("./db_config")

const sql = `CREATE DATABASE Eternal`

db.query(sql, (err) => {
  if (err) throw err
  console.log("database berhasil dibuat!")
})
