
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();


//var bodyParser  = require('body-parser'); 

const mongo=require('./api/Config/mongoose_connection')
const postgres =require('./api/Config/postgresql_connection')


//Using Middleware from Middlewares directory
const setMiddleware =require('./api/Middlewares/Middleware');
const setRoutes = require('./api/routes/routes');
setMiddleware(app);

//Using Routes from Routes directory
setRoutes(app);

  

var PORT= process.env.PORT || 5000;

mongo.mongoose
    .connect(mongo.uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log("MongoDB connected");
        postgres.connect().then(() => {
            console.log("PostgreSQL connected");
            const server = http.createServer(app);

            server.listen(PORT,()=>{
                console.log("Server listening on PORT: "+PORT);
            });
        })
        .catch((err) => {
            console.log(err);
        })

    })
    .catch((e) => {
        console.log(e)
    })






