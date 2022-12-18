import express from "express"
const router = express.Router()

import { buyProduct, getHistoryBuy } from "../controllers/historybuy"

router.post("/gethistorybuy", getHistoryBuy)
router.post("/buyproduct", buyProduct)

export default router