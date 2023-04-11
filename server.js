// const http = require("http");
require('dotenv').config();



const app = require('./app');

const greenlock=require('./greenlock');


// require('./app');

// require('./greenlock');

greenlock.serve(app);
