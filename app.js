const express = require("express");
const path = require("path");
const app = express();

// const http=require("http");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "client-static")));

app.use("/", function (req, res) {
    res.sendFile(path.join(__dirname, "client-static", "index.html"));
})

module.exports = app;

// for development and debugging

// const server=http.createServer(app);

// server.listen();

// app.listen(PORT, function () {
//     console.log(`App listening on PORT ${PORT}`);
// });
