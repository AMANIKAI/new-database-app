const express = require('express');
const router = express.Router();
const User = require ('../models/user')

router.get('/', (req,res)=>{
    res.render('layouts/collect')
    
})

//creating user on mongoDB
router.post('/', (req,res)=>{
    const createdUser = new User(req.body)
    createdUser.save()
    console.log(req.body)
})

module.exports = router