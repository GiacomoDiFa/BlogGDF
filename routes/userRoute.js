const express = require('express');
const router = express.Router();
const uuid = require('uuid');

const User = require('../models/User');

class Session{
    constructor(username, expiresAt){
        this.username = username
        this.expiresAt = expiresAt
    }

    isExpired(){
        this.expiresAt < (new Date())
    }
}

const sessions = {}

router.post('/signin', async(req,res)=>{
    const {username, password} = req.body;
    if(!username){
        res.status(401).end()
        return
    }
    const user = await User.findOne({email:username});
    const expectedPassword = user.password;
    if(!expectedPassword || expectedPassword !== password){
        res.status(401).end()
        return
    }

    const sessionToken = uuid.v4();

    const now = new Date();
    const expiresAt = new Date(+now+120*1000);

    const session = new Session(username,expiresAt);
    sessions[sessionToken] = session;
    
    res.cookie("session_token",sessionToken,{expires:expiresAt});
    res.end();
});

router.get('/welcome', async(req,res)=>{
    if(!req.cookies){
        res.status(401).end();
        return
    }

    const sessionToken = req.cookies['session_token'];
    if(!sessionToken){
        res.status(401).end();
        return
    }
    userSession = sessions[sessionToken];
    if(!userSession){
        res.status(401).end();
        return
    }
    if(userSession.isExpired()){
        delete sessions[sessionToken];
        res.status(401).end();
        return
    }
    res.send(`Welcome ${userSession.username}!`).end();
});

router.post('/refresh', async(req,res)=>{
    if (!req.cookies) {
        res.status(401).end();
        return
    }

    const sessionToken = req.cookies['session_token'];
    if (!sessionToken) {
        res.status(401).end();
        return
    }

    userSession = sessions[sessionToken]
    if (!userSession) {
        res.status(401).end();
        return
    }
    if (userSession.isExpired()) {
        delete sessions[sessionToken];
        res.status(401).end();
        return
    }
    // (END) The code until this point is the same as the first part of the welcomeHandler

    // create a new session token
    const newSessionToken = uuid.v4();

    // renew the expiry time
    const now = new Date();
    const expiresAt = new Date(+now + 120 * 1000);
    const session = new Session(userSession.username, expiresAt);

    // add the new session to our map, and delete the old session
    sessions[newSessionToken] = session;
    delete sessions[sessionToken];

    // set the session token to the new value we generated, with a
    // renewed expiration time
    res.cookie("session_token", newSessionToken, { expires: expiresAt });
    res.end();
});

router.get('/logout',async(req,res)=>{
    if (!req.cookies) {
        res.status(401).end();
        return
    }

    const sessionToken = req.cookies['session_token'];
    if (!sessionToken) {
        res.status(401).end();
        return
    }

    delete sessions[sessionToken];

    res.cookie("session_token", "", { expires: new Date() });
    res.end();
});

module.exports = router;