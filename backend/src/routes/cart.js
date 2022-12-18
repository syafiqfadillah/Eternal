import express from "express"
import { getCart, getUsers, postCart } from "../controllers/cart"
const router = express.Router()

router.post("/getusercart", getUsers)
router.post("/postcart", postCart)
router.post("/getcart", getCart)

export default router