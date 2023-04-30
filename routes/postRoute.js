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
        const {id,title,summary,content,imageUrls} = req.body;
        await Post.findByIdAndRemove(id);
        return res.send('Post removed');
    }
    catch(error){
        return res.status(404).json(error);
    }
})

module.exports = router;