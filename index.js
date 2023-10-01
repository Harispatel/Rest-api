const express = require('express')
const conn = require('./server')
var http = require('http');
const app = express()

const port = 3000
const Blog = require('./model/blog')
const { default: mongoose } = require('mongoose');
const blog = require('./model/blog');
app.use(express.json());
app.post('/', async (req, res) => {
    const data = await Blog.create(req.body)
    res.send(data)
  })
  

app.patch('/update',async(req,res)=>{
    const data =await Blog.updateOne(
        { "_id": req.query.id},
        {
          $set: {
            "title": req.body.title,
            "author": req.body.author,
            "body": req.body.body, 
          },
        }
      ); 
    
    res.send(data)
})
app.delete('/delete',async(req,res)=>{
Blog.deleteOne({ _id: req.query.id }).then(result => {

    res.send(result)
});

   
})

app.get('/test', async (_req, res) => {
  var data = await Blog.find();
  res.send(data);
})

app.listen(port, async () => {
    await conn()    
    // console.log(`Example app listening on port ${port}`)
})


