import express from "express"
import multer from "multer"

const router = express.Router()

import {
    postProduct,
    getProduct,
    getAllProduct,
    getProductById,
    editProductById,
} from "../controllers/product.js"

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./images")
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getTime() + "-" + file.originalname)
    },
})
var upload = multer({ storage: storage })

router.use(upload.single("image"))
router.post("/product", postProduct)
router.get("/product", getAllProduct)
router.post("/getproduct", getProduct)
router.post("/product/:id", getProductById)
router.put("/product/:id", editProductById)

export default router