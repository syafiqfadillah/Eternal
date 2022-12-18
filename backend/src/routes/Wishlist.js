import express from "express"
const router = express.Router()

import { getWishlist, postWishlist } from "../controllers/wishlist"

router.post("/getwishlist", getWishlist)
router.post("/postwishlist", postWishlist)

export default router