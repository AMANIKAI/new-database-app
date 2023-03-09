//core dependancies
const express = require("express");
const dotenv = require("dotenv");
const path = require ("path");
const mongoose = require ('mongoose');

//OUR IMPORTS MODULES
const connectDB = require('./database/mongo')
const addUser = require('./routes/addUser');


const app = express();
let PORT = process.env.PORT || 5000;

//body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

dotenv.config({path: "config.env"})

app.use('/', addUser)
//set the view engine path
app.set('view engine', 'ejs')


app.listen(PORT, ()=>{
        console.log('SERVER CONNECTED')
        connectDB()

});


