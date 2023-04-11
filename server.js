// const http = require("http");
require('dotenv').config();
const PORT = process.env.PORT || 3000;


const app = require('./app');

// const greenlock=require('./greenlock');

// greenlock.serve(app);

app.listen(PORT,()=>`App Listening on ${PORT}`);
