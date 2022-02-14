const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
require('dotenv').config();


const PORT = process.env.PORT || 5001;


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});

// DATABASE_HOST = "127.0.0.1";
// DATABASE_USER = "root";
// DATABASE_PASSWORD = "password";
// DATABASE_NAME = "gooseneck_Database";



db.connect((err) => {
    if (err) throw err;
    console.log("Mysql Connected...");
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM questions";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req, res) => {
    const topic = req.body.topic;
    const question = req.body.question;

    const sqlInsert = "INSERT INTO questions (topic, question) VALUES (?, ?)";
    db.query(sqlInsert, [topic, question], (err, result) => {

    });
});


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));

// app.listen(process.env.PORT || PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })

// app.listen(8000, () => {
//     console.log("running on port 3001");
// });

// try this

// app.get('/api/get', (req, res) => {
//     const sqlInsert = "SELECT * FROM questions";
//     db.query(sqlInsert, (err, result) => {
//         console.log(result);
//     });
// })

// 127.0.0.1
