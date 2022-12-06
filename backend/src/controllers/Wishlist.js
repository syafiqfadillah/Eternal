import Wishlist from "../models/Wishlist.js"

export const getWishlist = (req, res) => {
  Wishlist.findAll()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.error(err))
}
