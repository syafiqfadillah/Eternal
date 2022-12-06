import express from "express"

const router = express.Router()

import { getWishlist } from "../controllers/Wishlist.js"
router.get("/wishlist", getWishlist)

export default router
