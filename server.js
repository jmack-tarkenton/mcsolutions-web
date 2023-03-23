const express = require("express");
const path=require("path");
const app = express();
const http=require("http");

const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "client-static")));

app.use("/",function(req,res){
    res.sendFile(path.join(__dirname, "client-static", "index.html"));
})

const server=http.createServer(app);

app.listen();

// app.listen(PORT, function() {
//   console.log(`App listening on PORT ${PORT}`);
// });
