import Jual from "../models/Jual.js"

export const getJual = (req, res) => {
  Jual.findAll()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.error(err))
}

export const postJual = (req, res) => {
  Jual.create(req.body)
    .then((result) => {
      res.status(200).json({
        message: "Post created",
        data: result,
      })
    })
    .catch((err) => console.log(err))
}
