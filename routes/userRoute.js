const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.post('/verifyadmin', async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email:email, password:password});
        if(user){
            const temp = {
                email : user.email,
                isAdmin : user.isAdmin,
                _id : user._id,
            }
            res.send(temp);
        }
        else{
            return res.status(404).json({message: 'User is not admin'});
        }
    }
    catch(error){
        return res.status(404).json({error});
    }
});

module.exports = router;