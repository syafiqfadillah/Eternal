import Profiles from "../models/Profile.js"

export const getProfile = (req, res) => {
  Profiles.findAll()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.error(err))
}

export const postProfile = (req, res) => {
  Profiles.create(req.body).then((result) => {
    res.status(200).json({
      message: "User Created",
      data: result,
    })
  })
}

export const putProfile = (req, res) => {
  Profiles.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      res.status(200).json({
        message: "User updated",
        data: result,
      })
    })
    .catch((err) => console.log(err))
}
