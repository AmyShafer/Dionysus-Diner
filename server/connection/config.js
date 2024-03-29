const mysql = require("mysql2")
require('dotenv').config();

// const sql = mysql.createConnection(
//     {
//         host: process.env.DB_HOST,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME
//     }
// )

let sql;  
  if (process.env.POSTGRESSQL_URL) {
    sql = process.env.POSTGRESSQL_URL;
  } else {
    sql = mysql.createConnection(
        {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        }
    )
  }

module.exports = sql;