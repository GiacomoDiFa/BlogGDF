const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

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

router.post('/addpost',async(req,res)=>{
        const {title,summary,content,imageUrls} = req.body;
        try{
            const post = new Post({
                title,
                summary,
                content,
                imageUrls
            });
            await post.save();
            res.send('New Post Added Succesfully');
        }
        catch(error){
            return res.status(404).json(error);
        }
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