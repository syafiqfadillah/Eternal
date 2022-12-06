import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./src/config/db_config.js";
import router from "./src/routes/login.js";
import bodyParser from "body-parser";
import routerProfile from "./src/routes/Profile.js"
import routerJual from "./src/routes/Jual.js"
import routerBeli from "./src/routes/Beli.js"
import routerWishlist from "./src/routes/Wishlist.js"
import Profile from "./src/models/Profile.js"
import Jual from "./src/models/Jual.js"
import Beli from "./src/models/Beli.js"
import Wishlist from "./src/models/Wishlist.js"
dotenv.config();


const app = express()
const port = 5300

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(cors())
app.use(multer().single("none"))
app.use(bodyParser.json())

// router
// const { jualProduct } = require("./routes")


try {
    await db.authenticate();
    console.log("Database connected!");
    // await Users.sync(); // apabila blm ada table user, akan  sync otomatis
} catch (error) {
    console.error(error);
}


// app.use("/riwayatbeli/v1", riwayatBeli)
Profile.sync().then()
Jual.sync().then()
Beli.sync().then()
Wishlist.sync().then()

app.use(routerProfile)
app.use(routerJual)
app.use(routerBeli)
app.use(routerWishlist)

app.use(express.json());
app.use(router);

app.listen(port, console.log(`Server running on http://localhost:${port}`))
