// var mysql = require("mysql");
// const express = require("express");
// const app = express();

// const connection = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "root",
//     password: "password",
//     database: 'gooseneck_Database'
// });

// connection.connect(function (err) {
//     if (err) {
//         return console.error("error: " + err.message);
//     }

//     console.log("Connected to the MySQL server.");
// });

const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "gooseneck_Database",
});

app.get("/", (req, res) => {
    
});

app.listen(3001, () => {
    console.log("running on port 3001");
});
