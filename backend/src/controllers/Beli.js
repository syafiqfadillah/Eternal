import Beli from "../models/Beli.js";

export const getBeli = (req, res) => {
  Beli.findAll()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.error(err))
}
