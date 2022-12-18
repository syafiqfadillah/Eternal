import { Sequelize } from "sequelize"
import db from "../config/db_config.js"

// init DataTypes
const { DataTypes } = Sequelize

// Define schema
const Cart = db.define(
    "cart",
    {
        quantity: {
            type: DataTypes.INTEGER,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
)

// Export model
export default Cart