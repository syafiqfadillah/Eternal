import express from "express"

const router = express.Router()

import {
  getProfile,
  postProfile,
  putProfile,
} from "../controllers/Profile.js"
router.get("/users", getProfile)
router.post("/users", postProfile)
router.put("/users/:id", putProfile)

export default router
