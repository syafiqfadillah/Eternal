const db = require("./db_config")

// const sql = `INSERT INTO riwayat_beli (nm_toko, nm_product, deskripsi, quantity, harga_product)
// SELECT nm_toko, nm_product, deskripsi, quantity, harga_product FROM product WHERE id_product=2`

const sql = `INSERT INTO profile (nm_toko, password,nama, email, nomor_telepon, jenis_kelamin, tanggal_lahir, alamat) 
VALUES ('TOKO Syafiq', 'banguntidur123','Syafiq Fadillah', 'syafiqfadillah@gmail.com', '085113136882', 'laki-laki', '18/11/22', 'jln kebagusan 2')`

/*
id_profile INT NOT NULL AUTO_INCREMENT,
                saldo VARCHAR(20),
                password VARCHAR(20),
                nm_toko VARCHAR(25),
                nama VARCHAR(20),
                email VARCHAR(50),
                nomor_telepon VARCHAR(15),
                jenis_kelamin VARCHAR(15),
                tanggal_lahir VARCHAR(20),
                alamat VARCHAR(100),
                refresh_token varchar(50),
                PRIMARY KEY(id_profile)
*/

db.query(sql, (err, result) => {
  if (err) throw err
  console.log("Datamu Berhasil Dibuat!")
})
