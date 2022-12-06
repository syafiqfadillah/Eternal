import { Sequelize } from "sequelize"
import db from "../config/db_config.js"

// init DataTypes
const { DataTypes } = Sequelize

// Defie schema
const Jual = db.define(
  "jual",
  {
    nm_toko: {
      type: DataTypes.STRING,
    },
    nm_tanaman: {
      type: DataTypes.STRING,
    },
    deskripsi: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.STRING,
    },
    harga: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
)

// Export model
export default Jual
