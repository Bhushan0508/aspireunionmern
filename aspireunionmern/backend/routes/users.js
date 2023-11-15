const router1 = require('express').Router();
let User = require('../models/user.model');

router1.route('/').get((req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=> res.status(400).json('Error: '+err));
});

router1.route('/add').post((req, res)=>{
    const username =req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(()=>res.json('User added!'))
    .catch(err=> res.status(400).json('Error: '+err));
});

module.exports =router1;