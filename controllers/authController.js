const express = require('express');

const User = require('../models/User');
const router = express.Router();

router.post('/register',async(req,res) =>{

    const { email } = req.body;

    try{
        if( await User.findOne({ email}))
        return res.status(400).send({ error: 'User ja existe'});

        const user = await  User.create(req.body);
        user.passwor = undefined;

        return res.send({ user });
    }catch(err) {
        return res.status(400).send({ error: 'Registration failed '});
    }

});
module.exports = app => app.use('/auth', router);