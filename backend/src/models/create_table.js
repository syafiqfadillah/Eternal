const db = require("./db_config")

const sql = `CREATE TABLE profile (
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
            )`

db.query(sql, (err) => {
  if (err) throw err
  console.log("table berhasil dibuat")
})
