const mongoose=require('mongoose');

const dbUser = 'dbUser';
const pass = 'Yrm1sdrmp9GZMOLK';
const databaseName="injection_attack"
const uri = `mongodb+srv://${dbUser}:${pass}@cluster0.evhow.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

module.exports={
    mongoose,
    uri
}