const db = require("./db_config")

const sql = `CREATE TABLE riwayat_beli (
                id_riwayatbeli INT NOT NULL AUTO_INCREMENT,
                id_product INT(10),
                nm_toko VARCHAR(20),
                nm_product VARCHAR(30),
                deskripsi VARCHAR(200),
                quantity VARCHAR(5),
                harga_product VARCHAR(10),
                PRIMARY KEY(id_riwayatbeli)
            )`

db.query(sql, (err) => {
  if (err) throw err
  console.log("table berhasil dibuat")
})
