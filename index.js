
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require("mysql");

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "gooseneck_Database",
});

app.use(cors());
app.use(express.json)
app.use(bodyParser.urlencoded({extended: true}));

app.post('api/insert', (req, res) => {

    const topic = req.body.topic
    const question = req.body.question

    const sqlInsert = "INSERT INTO questions (topic, question) VALUES (?, ?)";
    db.query(sqlInsert, [topic, question], (err, result) => {
        console.log(result)
    })
})

app.listen(3001, () => {
    console.log("running on port 3001");
});
