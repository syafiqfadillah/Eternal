import { Sequelize } from "sequelize";
import db from "../config/db_config.js"

const { DataTypes } = Sequelize;

const Users = db.define("users", {
    nama:{
        type: DataTypes.STRING
    },
    alamat:{
        type: DataTypes.STRING
    },
    gender:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    nohp:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();

export default Users;