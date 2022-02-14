const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "us-cdbr-east-05.cleardb.net",
    user: "b290815ace9550",
    password: "f11f0086",
    database: "heroku_ca2c199a21afb5b",
});


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


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

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
