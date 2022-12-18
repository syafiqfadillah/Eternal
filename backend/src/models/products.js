import { Sequelize } from "sequelize"
import db from "../config/db_config.js"

// init DataTypes
const { DataTypes } = Sequelize

// Defie schema
const Products = db.define(
    "products",
    {
        product_name: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        user_seller_id: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
)

// Export model
export default Products