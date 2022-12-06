import express from "express"

const router = express.Router()

import { getJual, postJual } from "../controllers/Jual.js"
router.get("/jual", getJual)
router.post("/jual", postJual)

export default router
