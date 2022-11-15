const db = require("./db_config")

const sql = `CREATE TABLE product (
                nm_toko VARCHAR(20),
                nm_tanaman VARCHAR(50),
                deskripsi VARCHAR(100),
                quantity VARCHAR(5),
                harga VARCHAR(20),
                PRIMARY KEY(nm_toko)
            )`

db.query(sql, (err) => {
  if (err) throw err
  console.log("table berhasil dibuat")
})
