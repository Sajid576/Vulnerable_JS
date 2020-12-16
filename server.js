
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();


const setMiddleware =require('./api/Middlewares/Middleware');
const setRoutes = require('./api/routes/routes');

//Using Middleware from Middlewares directory
setMiddleware(app);

//Using Routes from Routes directory 
setRoutes(app);





var PORT= process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT,()=>{
      console.log("Server listening on PORT: "+PORT);
});
