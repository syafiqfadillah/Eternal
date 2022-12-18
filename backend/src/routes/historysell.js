// import express from "express"
// const router = express.Router()

// import { buyProduct, getHistoryBuy } from "../controllers/historybuy"

// router.post("/gethistorybuy", getHistoryBuy)
// router.post("/buyproduct", buyProduct)

// export default router

import express from "express"
const router = express.Router()

import { getHistorySell, sellProduct } from "../controllers/historysell"

router.post("/gethistorysell", getHistorySell)
router.post("/posthistorysell", sellProduct)
// router.post("/posthistorysell", postHistorySell)

export default router