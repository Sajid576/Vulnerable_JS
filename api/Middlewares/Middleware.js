const express = require('express');
const morgan = require("morgan");

const middlewares = [
  morgan("dev"), // used for logging the request URL for development purposes
  express.json(), // used for parsing data from request
  express.urlencoded({ extended: true }),
];




module.exports = (app) => {
    
    middlewares.forEach(m =>{
        
        app.use(m)
    })
}