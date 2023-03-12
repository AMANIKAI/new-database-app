const express = require('express');
const router = express.Router();
const Users = require ('../models/user')

router.get('/', async(req,res)=>{
    const userList = await Users.find({}).exec();
    res.render('layouts/userDetails', {userList})
    
    
    
})

//creating user on mongoDB
router.post('/', (req,res)=>{
    const createdUser = new Users(req.body)
    createdUser.save()
    res.redirect('/')
})

module.exports = router