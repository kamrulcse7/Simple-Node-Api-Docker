const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("Welcome");
})

app.get("/info", (req, res) => {
    res.status(200).json({
        "name" : "Kamrul Hasan",
        "mobile" : "01874007261",
        "email" : "kamrulcse7@gmail.com",
        "address" : "Dhaka, Bangladesh"
    })
});

module.exports = app;