const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
// const http=require("http");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "client-static")));

app.use("/", function (req, res) {
    res.sendFile(path.join(__dirname, "client-static", "index.html"));
})

module.exports = app;

// for development and debugging
if (require.main === module) {
    // require('http').createServer(app).listen(PORT, function () {
    //     console.info("Listening for HTTP on", this.address());
    // });
    app.listen(PORT, function () {
        console.info("Listening for HTTP on", this.address());
    });
}
// const server=http.createServer(app);

// server.listen();

// app.listen(PORT, function () {
//     console.log(`App listening on PORT ${PORT}`);
// });
