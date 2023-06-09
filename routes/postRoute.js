const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});

const Post = require('../models/Post');
const { error } = require('console');

const storage = multer.diskStorage({
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
});

const upload = multer({storage:storage});


router.get('/getallpost',async(req,res)=>{
    try{
        const posts = await Post.find();
        res.send(posts);
    }
    catch(error){
        return res.status(404).json(error);
    }
});

router.post('/getpostbyid',async(req,res)=>{
    const {id} = req.body;
    try{
        const post = await Post.findOne({_id:id});
        res.send(post);
    }
    catch(error){
        return res.status(400).json({message:error});
    }
})

router.post('/addpost',upload.single('image'),async(req,res)=>{
        const {title,summary,content,imageUrls} = req.body;
        const imageUrl = 'assets/images/'+imageUrls;
        console.log(imageUrl);
        const file = req.file;
        cloudinary.uploader.upload(file.path,(error,result)=>{
            if(error){
                console.error(error);
                res.status(500).json({error:'failed to upload image'});
            }
            else{
                const imageUrlcloud = result.secure_url;
                try{
                    const post = new Post({
                        title,
                        summary,
                        content,
                        imageUrls : [imageUrlcloud]
                    });
                    post.save();
                    res.send('New Post Added Succesfully');
                }
                catch(error){
                    return res.status(404).json(error);
                }
            }
        })
        
});

router.post('/removepost',async(req,res)=>{
    try{
        const {_id} = req.body;
        const result = await Post.findByIdAndDelete(_id);
        if(!result){
            return res.status(404).json('Post not found');
        }
        return res.status(200).json('Post removed');
    }
    catch(error){
        return res.status(500).json(error);
    }
})

module.exports = router;