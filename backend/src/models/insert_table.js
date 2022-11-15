const db = require("./db_config")

// const sql = `INSERT INTO riwayat_beli (nm_toko, nm_product, deskripsi, quantity, harga_product)
// SELECT nm_toko, nm_product, deskripsi, quantity, harga_product FROM product WHERE id_product=2`

const sql = `INSERT INTO profile (nm_toko, saldo) VALUES ('TOKO Syafiq', '5000000')`

db.query(sql, (err, result) => {
  if (err) throw err
  console.log("Datamu Berhasil Dibuat!")
})
