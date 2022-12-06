import express from "express"

const router = express.Router()

import { getBeli } from "../controllers/Beli.js"
router.get("/beli", getBeli)

export default router
