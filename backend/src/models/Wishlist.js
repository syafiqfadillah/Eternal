import { Sequelize } from "sequelize"
import db from "../config/db_config.js"

// init DataTypes
const { DataTypes } = Sequelize

// Defie schema
const Wishlist = db.define(
  "wishlist",
  {
    nm_toko: {
      type: DataTypes.STRING,
    },
    nm_product: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.STRING,
    },
    harga_product: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
)

// Export model
export default Wishlist
