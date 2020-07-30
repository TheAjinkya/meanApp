const express = require('express');
const bodyParser = require('body-parser') 

const app = express();



app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.post('/api/posts',(req, res, next)=>{
    const post = req.body
    console.log(post)
    res.status(201).json({
        message:"Post added successfully!"
    })
    next()
})

app.get('/api/posts',(req, res, next)=>{

    const posts = [
        {title:"First Post", content:"First Content"}
    ]
    res.status(200).json({
        message:"Posts Fetched Successfully!",
        posts: posts
    })
    res.end("Welcome to the Posts!")
    next();
})
module.exports = app;