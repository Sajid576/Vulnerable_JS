
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const mongoose=require('mongoose')

const dbUser = 'dbUser'
const pass = 'Yrm1sdrmp9GZMOLK'
const uri = `mongodb+srv://${dbUser}:${pass}@cluster0.evhow.mongodb.net/materialisedView?retryWrites=true&w=majority`;


const setMiddleware =require('./api/Middlewares/Middleware');
const setRoutes = require('./api/routes/routes');

//Using Middleware from Middlewares directory
setMiddleware(app);

//Using Routes from Routes directory 
setRoutes(app);

// var PORT= process.env.PORT || 5000;
// const server = http.createServer(app);

// server.listen(PORT,()=>{
//       console.log("Server listening on PORT: "+PORT);
// });


const PORT = process.env.PORT || 5000

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
        })
    })
    .catch((e) => {
        console.log(e)
    })
