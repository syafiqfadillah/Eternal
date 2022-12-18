import { Sequelize } from "sequelize"
import db from "../config/db_config.js"

// init DataTypes
const { DataTypes } = Sequelize

// Define schema
const HistorySell = db.define(
    "history-sell",
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
export default HistorySell