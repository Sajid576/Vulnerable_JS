
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const mongoose=require('mongoose')

var multer      = require('multer');  
var csv         = require('csvtojson');  
var bodyParser  = require('body-parser'); 


const dbUser = 'dbUser'
const pass = 'Yrm1sdrmp9GZMOLK'
const uri = `mongodb+srv://${dbUser}:${pass}@cluster0.evhow.mongodb.net/materialisedView?retryWrites=true&w=majority`;


const setMiddleware =require('./api/Middlewares/Middleware');
const setRoutes = require('./api/routes/routes');
var csvModel    = require('./api/models/excel'); 


//Using Middleware from Middlewares directory
setMiddleware(app);

//Using Routes from Routes directory 
setRoutes(app);

// var PORT= process.env.PORT || 5000;
// const server = http.createServer(app);

// server.listen(PORT,()=>{
//       console.log("Server listening on PORT: "+PORT);
// });
///////////////////////////
var storage = multer.diskStorage({  
    destination:(req,file,cb)=>{  
        cb(null,'./');  
    },  
    filename:(req,file,cb)=>{  
        cb(null,file.originalname);  
    }  
});  
  
var uploads = multer({storage:storage});  


const PORT = process.env.PORT || 5000

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING ON PORT: ${PORT}`)
        })
    })
    .catch((e) => {
        console.log(e)
    })


const Csv=require('csvtojson')
csv()
.fromFile("Excel.csv")
.then((jsonObj)=>{
    console.log(jsonObj);
    csvModel.insertMany(jsonObj,(err,data)=>{  
            if(err){  
                console.log(err);  
            }else{  
               // console.log("CSV data inserted"); 
            }  
     }); 
});



