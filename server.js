
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

var multer      = require('multer');  
//var bodyParser  = require('body-parser'); 


const dbUser = 'dbUser'
const pass = 'Yrm1sdrmp9GZMOLK'
const uri = `mongodb+srv://${dbUser}:${pass}@cluster0.evhow.mongodb.net/materialisedView?retryWrites=true&w=majority`;
const mongo=require('./api/model/mongoose_connection')
const postgres =require('./api/model/postgresql_connection')


//Using Middleware from Middlewares directory
const setMiddleware =require('./api/Middlewares/Middleware');
const setRoutes = require('./api/routes/routes');
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
  
//var uploads = multer({storage:storage});  

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

// var csvModel = require('./api/model/excel'); 

// var csv = require('csvtojson');  
// csv()
// .fromFile("Excel.csv")
// .then((jsonObj)=>{
//     console.log(jsonObj);
//     csvModel.insertMany(jsonObj,(err,data)=>{  
//             if(err){  
//                 console.log(err);  
//             }else{  
//                 console.log(data); 
//             }  
//      }); 
// });
