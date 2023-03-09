const mongoose = require ('mongoose');

const connectDB = ()=>{
    const dbLink = process.env.DB_URL
    
    mongoose.connect(dbLink)
    mongoose.connection.once('open', ()=>console.log('DATABASE CONNECTED'))
    mongoose.connection.on('error', ()=>console.log('DATABASE FAILURE'))
}
module.exports = connectDB;
