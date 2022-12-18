import { createConnection } from "mysql"

let db = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "eternal_db",
})

const sql = `CREATE DATABASE eternal_db`

db.query(sql, (err, result) => {
    if (err) throw err
    console.log("Database Berhasil dibuat")
})

db.connect((err) => {
    err ? console.error(err) : console.log("Connected to database!")
})