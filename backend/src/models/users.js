import { Sequelize } from "sequelize"
import db from "../config/db_config.js"

// init DataTypes
const { DataTypes } = Sequelize

// Define schema
const Users = db.define(
    "users",
    {
        name: {
            type: DataTypes.STRING,
        },
        balance: {
            type: DataTypes.INTEGER,
        },
        phone_number: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
        refresh_token: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
)

// Export model
export default Users