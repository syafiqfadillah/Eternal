module.exports.postRiwayatBeli = (req, res) => {
  const sql = `INSERT INTO riwayat_beli (nm_toko, nm_product, deskripsi, quantity, harga_product)
  SELECT nm_toko, nm_product, deskripsi, quantity, harga_product FROM product WHERE id_product=2`

  model(sq, res, "Berhasil post riwayat beli!")
}
