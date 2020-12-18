const mongoose=require('mongoose');

const dbUser = 'dbUser';
const pass = 'Yrm1sdrmp9GZMOLK';
const uri = `mongodb+srv://${dbUser}:${pass}@cluster0.evhow.mongodb.net/materialisedView?retryWrites=true&w=majority`;

module.exports={
    mongoose,
    uri
}