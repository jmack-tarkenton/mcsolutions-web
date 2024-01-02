const express = require("express");
const path = require("path");
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "web"),{dotfiles:'allow'}));

app.use("/", function (req, res) {
    res.sendFile(path.join(__dirname, "web", "index.html"));
})

module.exports = app;

